import React from 'react';
import Modal from 'react-modal';

const DeleteGameModal = (props) => (
  <Modal
    isOpen={props.modalIsOpen}
    contentLabel="Warning!"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Warning!</h3>
    <p className="modal__body">Are you sure you want to delete this entry?</p>
    <button className="button button--secondary" onClick={props.onRemove}>
      Remove Game
    </button>
  </Modal>
);

export default DeleteGameModal;
