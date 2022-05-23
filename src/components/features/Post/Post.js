import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectPostById, removePost } from '../../../Redux/postsRedux';
import { Card, Row, Button, Modal, Stack } from 'react-bootstrap';
import { useState } from 'react';

const Post = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector((state) => selectPostById(state, id));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRemove = () => {
    dispatch(removePost(post.id));
  };
  return (
    <Row style={{ margin: 'auto', width: '70%' }}>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Are you Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This operation will completely remove this post from app.
          <p>Are you sure you want to do this?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Link to="/">
            <Button variant="danger" onClick={() => handleRemove()}>
              Remove
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      <Card>
        <Card.Title>
          <Row>
            <Stack direction="horizontal" gap={3}>
              <h1>{post.title}</h1>
              <div className='ms-auto'>
                <Link to={'/post/edit/' + post.id}>
                  <Button variant="outline-info">EditPost</Button>
                </Link>
              </div>
              <div>
                <Button variant="outline-danger" onClick={() => handleShow()}>
                  Delete
                </Button>
              </div>
            </Stack>
          </Row>
        </Card.Title>
        <Card.Text>
          <b>Author: </b>
          {post.author}
        </Card.Text>
        <Card.Text>
          <b>Published: </b> {post.publishedDate}
        </Card.Text>
        <Card.Text>{post.content}</Card.Text>
      </Card>
    </Row>
  );
};

export default Post;
