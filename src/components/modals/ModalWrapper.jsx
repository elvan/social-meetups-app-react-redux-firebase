import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { closeModal } from './store/modalActions';

export const ModalWrapper = ({ children, size, header }) => {
  const dispatch = useDispatch();

  return (
    <Modal show={true} size={size} onHide={() => dispatch(closeModal())}>
      {header && (
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
      )}

      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={() => dispatch(closeModal())}>
          Close
        </Button>
        <Button variant='primary' onClick={() => dispatch(closeModal())}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
