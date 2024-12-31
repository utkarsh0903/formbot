import React from "react";

const CreateFolderModal = ({ activeWorkspaceId, folderData, setFolderData, handleCreateFolder }) => {
  return (
    <div>
      <h2>Create New Folder</h2>
      <input
        type="text"
        placeholder="Enter folder name"
        name="folderName"
        value={folderData.folderName}
        onChange={(e) => setFolderData({
          ...folderData,
          [e.target.name] : e.target.value,
          activeWorkspaceId: activeWorkspaceId
        })}
      />
      <button onClick={(e) => {handleCreateFolder(e)}}>Done</button>
      <span>|</span>
      <button>Cancel</button>
    </div>
  );
};

export default CreateFolderModal;
