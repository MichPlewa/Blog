import { Modal, Button } from 'bootstrap';

const SureWindo = (props) => {
  return (
    <Modal show={props.show} onHide={() => props.handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Are you Sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        This operation will completely remove this post from app.
        <p>Are you sure you want to do this?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.handleClose()}>
          Close
        </Button>
        <Button variant="danger" onClick={() => props.handleClose()}>
          Remove
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SureWindo;
