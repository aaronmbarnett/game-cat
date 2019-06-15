import React from 'react';
import Modal from 'react-modal';

const DeleteGameModal = (props) => (
  <Modal
    isOpen={props.modalIsOpen}
    contentLabel="Warning!"
    closeTimeoutMS={200}
    className="modal"
    onRequestClose={props.handleClearModal}
  >
    <h3 className="modal__title">Warning!</h3>
    <p className="modal__body">Are you sure you want to delete this entry?</p>
    <div className="button-group">
      <button className="button button--secondary" onClick={props.onRemove}>
        Remove Game
      </button>
      <button className="button" onClick={props.handleClearModal}>
        Never Mind!
      </button>
    </div>
  </Modal>
);

export default DeleteGameModal;
