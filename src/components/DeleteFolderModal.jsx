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
        activeWorkspaceId:activeWorkspaceId,
      }
    console.log(folderData);
    handleDeleteFolder(e, data);
  };

  return (
    <div>
      <h2>Are you sure you want to delete this folder ?</h2>
      <button
        onClick={(e) => {
          handleDelete(e);
        }}
      >
        Confirm
      </button>
      <span>|</span>
      <button onClick={() => setIsDeleteFolderModalOpen(false)}>Cancel</button>
    </div>
  );
};

export default DeleteFolderModal;
