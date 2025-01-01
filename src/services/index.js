const URL = 'http://localhost:5000/api'
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