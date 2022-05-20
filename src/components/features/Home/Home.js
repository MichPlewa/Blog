import { Col, Row, Stack } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllPages } from '../../../redux/postsRedux';

const Home = () => {
  const pages = useSelector((state) => selectAllPages(state));

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
        {pages.map((page) => (
          <Col key={page.id}>
            <Card style={{ margin: 'auto', width: '100%' }}>
              <Card.Body>
                <Card.Title>{page.title}</Card.Title>
                <Card.Text>
                  <b>Author: </b>
                  {page.author}
                </Card.Text>
                <Card.Text>
                  <b>Published: </b>
                  {page.publishedDate}
                </Card.Text>
                <Card.Text>{page.shortDescription}</Card.Text>
                <Link to={'/post/' + page.id}>
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
