import { Form } from 'react-bootstrap';

const TextArea = (props) => {
  return (
    <Form.Group className="mb-3" controlId={props.id}>
      <Form.Label>{props.children}</Form.Label>
      <Form.Control
        as={props.as}
        rows={props.rows}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </Form.Group>
  );
};

export default TextArea;
