import { Row, Col, Stack, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dateToStr } from '../../utils/dateToStr';
import { useParams } from 'react-router-dom';
import { selectPostByCategory } from '../../../Redux/postsRedux';

const CategoryesPage = () => {
  const { category } = useParams();
  const posts = useSelector((state) => selectPostByCategory(state, category));
  posts.map((post) => console.log('map', post));

  return (
    <div>
      <Row>
        <Col>
          <h2>{category}</h2>
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
                <Card.Text>
                  <b>Category: </b>
                  {post.category}
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

export default CategoryesPage;
