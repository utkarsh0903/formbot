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
    <div>
      <h2>Are you sure you want to delete this form ?</h2>
      <button
        onClick={(e) => {
          handleDelete(e);
        }}
      >
        Confirm
      </button>
      <span>|</span>
      <button onClick={() => setIsDeleteFormModalOpen(false)}>Cancel</button>
    </div>
  );
};

export default DeleteFormModal;
