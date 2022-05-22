import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextArea from '../../common/TextArea/TextArea';
import TextInput from '../../common/TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';

const PostForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    console.log('sssss');
    dispatch(addPost(post));
  };
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const post = {
    title: title,
    shortDescription: description,
    content: content,
    publishedDate: date,
    author: author,
  };
  console.log(post);
  return (
    <Form>
      <TextInput
        type="text"
        placeholder="Enter Title"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
      >
        Title
      </TextInput>
      <TextInput
        type="text"
        placeholder="Enter Author"
        id="author"
        onChange={(e) => setAuthor(e.target.value)}
      >
        Author
      </TextInput>
      <TextInput
        type="text"
        placeholder="Enter Date"
        id="date"
        onChange={(e) => setDate(e.target.value)}
      >
        Date
      </TextInput>
      <TextArea
        as="textarea"
        placeholder="Leave a comment here"
        rows="3"
        id="description"
        onChange={(e) => setDescription(e.target.value)}
      >
        Short description
      </TextArea>
      <TextArea
        as="textarea"
        placeholder="Enter content"
        rows="20"
        id="content"
        onChange={(e) => setContent(e.target.value)}
      >
        Short description
      </TextArea>
      <Link to="/">
        <Button onClick={() => handleSubmit()}>AddPost</Button>
      </Link>
    </Form>
  );
};

export default PostForm;
