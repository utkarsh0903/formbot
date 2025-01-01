import React from "react";

const CreateFolderModal = ({ activeWorkspaceId, folderData, setFolderData, handleCreateFolder, setIsFolderModalOpen }) => {
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
      <button onClick={() => setIsFolderModalOpen(false)}>Cancel</button>
    </div>
  );
};

export default CreateFolderModal;
