import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextArea from '../../common/TextArea/TextArea';
import TextInput from '../../common/TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, editPost, selectPostById } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

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
  console.log(singlePost);
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
      <TextInput
        type="text"
        placeholder="Enter Date"
        id="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      >
        Date
      </TextInput>
      <TextArea
        as="textarea"
        placeholder="Leave a comment here"
        rows="3"
        id="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      >
        Short description
      </TextArea>
      <TextArea
        as="textarea"
        placeholder="Enter content"
        rows="20"
        id="content"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      >
        Short description
      </TextArea>
      <Button type="submit">AddPost</Button>
    </Form>
  );
};

export default PostForm;
