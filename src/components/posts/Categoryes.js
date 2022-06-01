import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selecetAllCategory } from '../../Redux/categoryRedux';

const Categoryes = () => {
  const navigate = useNavigate();
  const categoryes = useSelector((state) => selecetAllCategory(state));
  const handleClick = (category) => {
    console.log(category.target.outerText);
    navigate('/categoryes/' + category.target.outerText);
  };
  return (
    <ListGroup>
      {categoryes.map((category) => (
        <ListGroup.Item onClick={(e) => handleClick(e)}>
          {category}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Categoryes;
