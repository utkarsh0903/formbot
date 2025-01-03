import React from "react";

const DeleteFormModal = ({
  activeWorkspaceId,
  activeFolderId,
  formData,
  formName,
  setIsDeleteFormModalOpen,
  handleDeleteForm,
}) => {
  const handleDelete = (e) => {
    const data = {
        ...formData,
        formName: formName,
        activeWorkspaceId:activeWorkspaceId,
        ...activeFolderId && { activeFolderId }
      }
      console.log(data);
    handleDeleteForm(e, data);
  };

  return (
    <div className="overlay">
        <div className="container" id="delete-modal">
      <h2>Are you sure you want to delete this form ?</h2>
      <div className="modal-btns">
      <button className="done-btn"
        onClick={(e) => {
          handleDelete(e);
        }}
      >
        Confirm
      </button>
      <span>|</span>
      <button className="cancel-btn" onClick={() => setIsDeleteFormModalOpen(false)}>Cancel</button>
      </div>
    </div>
    </div>
  );
};

export default DeleteFormModal;
