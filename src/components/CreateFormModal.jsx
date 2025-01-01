import React from 'react'

const CreateFormModal = ({ activeWorkspaceId, formData, setFormData, activeFolderId, handleCreateForm, setIsFormModalOpen }) => {
  return (
    <div>
      <h2>Create New Form</h2>
      <input
        type="text"
        placeholder="Enter form name"
        name="formName"
        value={formData.formName}
        onChange={(e) => setFormData({
          ...formData,
          [e.target.name] : e.target.value,
          activeWorkspaceId: activeWorkspaceId,
          ...(activeFolderId && { activeFolderId })
        })}
      />
      <button onClick={(e) => {handleCreateForm(e)}}>Done</button>
      <span>|</span>
      <button onClick={() => {setIsFormModalOpen(false)}}>Cancel</button>
    </div>
  )
}

export default CreateFormModal