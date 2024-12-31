import React from 'react'

const CreateFormModal = ({ activeWorkspaceId, formData, setFormData, handleCreateForm }) => {
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
          activeWorkspaceId: activeWorkspaceId
        })}
      />
      <button onClick={(e) => {handleCreateForm(e)}}>Done</button>
      <span>|</span>
      <button>Cancel</button>
    </div>
  )
}

export default CreateFormModal