import React from "react";

const DeleteFolderModal = ({
  activeWorkspaceId,
  folderData,
  folderName,
  setIsDeleteFolderModalOpen,
  handleDeleteFolder,
}) => {
  const handleDelete = (e) => {
    const data = {
      ...folderData,
      folderName: folderName,
      activeWorkspaceId: activeWorkspaceId,
    };
    handleDeleteFolder(e, data);
  };

  return (
    <div className="overlay">
      <div className="container" id="delete-modal">
        <h2>Are you sure you want to delete this folder ?</h2>
        <div className="modal-btns">
        <button
        className="done-btn"
          onClick={(e) => {
            handleDelete(e);
          }}
        >
          Confirm
        </button>
        <span>|</span>
        <button className="cancel-btn" onClick={() => setIsDeleteFolderModalOpen(false)}>
          Cancel
        </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteFolderModal;
