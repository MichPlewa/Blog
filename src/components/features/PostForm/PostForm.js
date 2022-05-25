import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextArea from '../../common/TextArea/TextArea';
import TextInput from '../../common/TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, editPost, selectPostById } from '../../../Redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { dateToStr } from '../../utils/dateToStr';

const PostForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: title,
      shortDescription: description,
      content: content,
      publishedDate: date,
      author: author,
    };
    console.log(dateToStr(post.publishedDate));
    if (props.variant === 'edit') {
      dispatch(editPost({ ...post, id: props.postId }));
    } else {
      dispatch(addPost(post));
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
  console.log(date);

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <TextInput
        type="text"
        placeholder="Enter Title"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      >
        Title
      </TextInput>
      <TextInput
        type="text"
        placeholder="Enter Author"
        id="author"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      >
        Author
      </TextInput>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(dateToStr(date))}
      />
      <TextArea
        as="textarea"
        placeholder="Enter description"
        rows="3"
        id="content"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      >
        Short description
      </TextArea>
      <Form.Group>
        <Form.Label value={content}>Main content</Form.Label>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          placeholder="Enter content"
        />
      </Form.Group>
      <Button type="submit">AddPost</Button>
    </Form>
  );
};

export default PostForm;
