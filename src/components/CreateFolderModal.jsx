import React from "react";
import "../styles/workspaceModal.css";

const CreateFolderModal = ({
  activeWorkspaceId,
  folderData,
  setFolderData,
  handleCreateFolder,
  setIsFolderModalOpen,
}) => {
  return (
    <div className="overlay">
      <div className="container">
        <h2>Create New Folder</h2>
        <input
          type="text"
          placeholder="Enter folder name"
          name="folderName"
          value={folderData.folderName}
          onChange={(e) =>
            setFolderData({
              ...folderData,
              [e.target.name]: e.target.value,
              activeWorkspaceId: activeWorkspaceId,
            })
          }
        />
        <div className="modal-btns">
          <button
          className="done-btn"
            onClick={(e) => {
              handleCreateFolder(e);
            }}
          >
            Done
          </button>
          <span>|</span>
          <button
            className="cancel-btn"
            onClick={() => setIsFolderModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateFolderModal;
