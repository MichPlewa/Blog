import { Col, Row, Stack } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllPost } from '../../../Redux/postsRedux';
import { dateToStr } from '../../utils/dateToStr';

const Home = () => {
  const posts = useSelector((state) => selectAllPost(state));
  return (
    <div>
      <Row>
        <Col>
          <h2>All posts</h2>
        </Col>
        <Col>
          <Stack direction="horizontal" gap={1}>
            <Link to="/post/add" className="ms-auto">
              <Button variant="outline-primary">AddPost</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <Row xs={1} sm={2} md={3}>
        {posts.map((post) => (
          <Col key={post.id}>
            <Card style={{ margin: '3% 5% 1% 0', width: '100%' }}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <b>Author: </b>
                  {post.author}
                </Card.Text>
                <Card.Text>
                  <b>Published: </b>
                  {dateToStr(post.publishedDate)}
                </Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Link to={'/post/' + post.id}>
                  <Button>Read More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
