import { Form } from 'react-bootstrap';

const TextInput = (props) => {
  console.log(props);
  return (
    <Form.Group className="mb-3" style={{ width: '40%' }} controlId={props.id}>
      <Form.Label>{props.children}</Form.Label>
      <Form.Control
        {...props.reg}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        {...props.form.title && <span>This is require</span>}
      />
    </Form.Group>
  );
};

export default TextInput;
