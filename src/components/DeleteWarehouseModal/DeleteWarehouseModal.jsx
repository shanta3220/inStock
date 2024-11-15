import React from "react";
import CloseIcon from "../../assets/Icons/close-24px.svg";
import Modal from "react-modal";
import axios from "axios";

import "./DeleteWarehouseModal.scss";

function DeleteWarehouseModal({
  id,
  warehouseName,
  setwarehouseToDisplay,
  warehouses,
  isOpen,
  closeModal,
}) {
  // double check the port
  const API_URL = import.meta.env.VITE_API_URL;

  const URLwarehouseModal = `${API_URL}/warehouse/${id}`;
  const deleteWarehouse = () => {
    axios
      .delete(URLwarehouseModal)
      .then(() => {
        setwarehouseToDisplay(
          warehouses.filter((warehouse) => warehouse.id !== id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
    closeModal;
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Delete Modal"
      overlayClassName="modal-overlay"
      className="delete-modal"
    >
      <div className="delete-modal__content">
        <img
          src={CloseIcon}
          alt="A close icon"
          className="delete-modal__close-icon"
          onClick={closeModal}
        />
        <h1 className="delete-modal__heading">{`Delete ${warehouseName} warehouse?`}</h1>
        <p className="delete-modal__text">{`Please confirm that you’d like to delete the ${warehouseName} from the list of warehouses. You won’t be able to undo this action.`}</p>
      </div>
      <div className="delete-modal__actions">
        <button
          className="delete-modal__button delete-modal__button--cancel"
          onClick={closeModal}
          onBlur={closeModal}
        >
          Cancel
        </button>
        <button
          className="delete-modal__button delete-modal__button--confirm"
          onClick={deleteWarehouse}
          onBlur={closeModal}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}

export default DeleteWarehouseModal;
