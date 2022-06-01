import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, editPost, selectPostById } from '../../../Redux/postsRedux';
import { selecetAllCategory } from '../../../Redux/categoryRedux';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import Option from '../../view/Option';

const PostForm = (props) => {
  const categorys = useSelector((state) => {
    return selecetAllCategory(state);
  });
  console.log(categorys);
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmitEnhanced = () => {
    if (date && content) handleSubmit();
  };

  const validateEnhanced = (e) => {
    setDateError(false);
    setContentError(false);

    if (!date) setDateError(true);
    if (!content) setContentError(true);
    validate(handleSubmitEnhanced)(e);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    const post = {
      title: title,
      shortDescription: description,
      content: content,
      publishedDate: date,
      author: author,
    };
    if (content && date) {
      if (props.variant === 'edit') {
        dispatch(editPost({ ...post, id: props.postId }));
      } else {
        dispatch(addPost(post));
      }
    }
    navigate('/');
  };
  const singlePost = useSelector((state) =>
    selectPostById(state, props.postId)
  );
  useEffect(() => {
    if (props.variant === 'edit' && singlePost) {
      setTitle(singlePost.title);
      setAuthor(singlePost.author);
      setDescription(singlePost.shortDescription);
      setDate(singlePost.publishedDate);
      setContent(singlePost.content);
    }
  }, [singlePost, props.variant]);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  return (
    <Form onSubmit={validateEnhanced}>
      <Form.Group className="mb-3" style={{ width: '40%' }} controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register('title', { required: true })}
          type="text"
          placeholder="Enter Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        {errors.title && (
          <small className="d-block form-text text-danger mt-2">
            This field is required This field is required and minimum 3 letters
          </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3" style={{ width: '40%' }} controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register('author', { required: true, maxLength: 3 })}
          type="text"
          placeholder="Enter author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {errors.author && (
          <small className="d-block form-text text-danger mt-2">
            This field is required and maximum 3 letters
          </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Date</Form.Label>
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
        {dateError && (
          <small className="d-block form-text text-danger mt-2">
            Date can't be empty
          </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Default select example">
          {categorys.map((category) => (
            <Option key={category}>{category}</Option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>shortDescription</Form.Label>
        <Form.Control
          {...register('shortDescription', { required: true, minLength: 20 })}
          as="textarea"
          rows="3"
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        {errors.shortDescription && (
          <small className="d-block form-text text-danger mt-2">
            This field is required and minimum 20 letters
          </small>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label value={content}>Main content</Form.Label>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          placeholder="Enter content"
        />
        {contentError && (
          <small className="d-block form-text text-danger mt-2">
            Content can't be empty
          </small>
        )}
      </Form.Group>
      <Button type="submit">AddPost</Button>
    </Form>
  );
};

export default PostForm;
