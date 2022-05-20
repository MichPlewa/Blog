import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './components/posts/Home';
import Post from './components/posts/Post';
import AddPost from './components/posts/AddPost';
import EditPost from './components/posts/EditPost';
import About from './components/posts/About';
import NotFound from './components/posts/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
