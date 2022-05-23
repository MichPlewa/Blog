import { Form } from 'react-bootstrap';

const TextInput = (props) => {
  return (
    <Form.Group className="mb-3" style={{ width: '40%' }} controlId={props.id}>
      <Form.Label>{props.children}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </Form.Group>
  );
};

export default TextInput;
