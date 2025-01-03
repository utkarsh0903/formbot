import React from "react";
import "../styles/workspaceModal.css";

const CreateFormModal = ({
  activeWorkspaceId,
  formData,
  setFormData,
  activeFolderId,
  handleCreateForm,
  setIsFormModalOpen,
}) => {
  return (
    <div className="overlay">
      <div className="container">
        <h2>Create New Form</h2>
        <input
          type="text"
          placeholder="Enter form name"
          name="formName"
          value={formData.formName}
          onChange={(e) =>
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
              activeWorkspaceId: activeWorkspaceId,
              ...(activeFolderId && { activeFolderId }),
            })
          }
        />
        <div className="modal-btns">
          <button
          className="done-btn"
            onClick={(e) => {
              handleCreateForm(e);
            }}
          >
            Done
          </button>
          <span>|</span>
          <button
          className="cancel-btn"
            onClick={() => {
              setIsFormModalOpen(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateFormModal;
