import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './components/features/Home/Home';
import Post from './components/features/Post/Post';
import AddPost from './components/view/AddPost';
import EditPost from './components/posts/EditPost';
import About from './components/posts/About';
import NotFound from './components/posts/NotFound';
import Header from './components/view/Header';
import Footer from './components/view/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
