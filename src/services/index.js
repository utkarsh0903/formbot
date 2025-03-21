// const URL = 'http://localhost:5000/api'
const URL = 'https://formbot-backend-4mge.onrender.com/api'

export const register = (data) => {
    return fetch(`${URL}/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

export const login = (data) => {
    return fetch(`${URL}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

export const workspace = () => {
    return fetch(`${URL}/workspace/create-workspace`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(),
    })
}

export const getWorkspace = (workspaceId) => {
    return fetch(`${URL}/workspace/${workspaceId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(),
    })
}

export const checkUserMode = (data) => {
    return fetch(`${URL}/workspace/sharedWith/${data.workspaceId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data),
    })
}

export const createFolder = (data) => {
    return fetch(`${URL}/folder/create-folder`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data),
    })
}

export const getFolder = (folderId) => {
    return fetch(`${URL}/folder/${folderId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(),
    })
}

export const deleteFolder = (data) => {
    return fetch(`${URL}/folder/delete-folder`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data),
    })
}

export const createForm = (data) => {
    return fetch(`${URL}/form/create-form`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data),
    })
}

export const getForm = (formId) => {
    return fetch(`${URL}/form/${formId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(),
    })
}

export const getSharedForm = (formId) => {
    return fetch(`${URL}/form/${formId}/formbot`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(),
    })
}

export const deleteForm = (data) => {
    return fetch(`${URL}/form/delete-form`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data),
    })
}

export const createFormInFolder = (data) => {
    return fetch(`${URL}/form/folder/create-form`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data),
    })
}

export const deleteFormInFolder = (data) => {
    return fetch(`${URL}/form/folder/delete-form`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data),
    })
}

export const addContentInForm = (data) => {
    return fetch(`${URL}/form/form-content/${data.formId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data),
    })
}

export const submitFormbot = (data) => {
    return fetch(`${URL}/form/responses/${data.formId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

export const increaseFormCount = (data) => {
    return fetch(`${URL}/form/responses/count/${data.formId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

export const showResponses = (formId) => {
    return fetch(`${URL}/form/${formId}/responses`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        }
    })
}