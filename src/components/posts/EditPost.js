import { useParams } from 'react-router-dom';
import PostForm from '../features/PostForm/PostForm';

const EditPost = () => {
  const { id } = useParams();
  return (
    <div>
      <div>EditPost</div>
      <PostForm variant="edit" postId={id} />
    </div>
  );
};

export default EditPost;
