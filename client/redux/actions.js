import actionTypes from './../constants/ActionTypes'

export function createUser(userData) {
    return {
        type: actionTypes.CREATING_USER,
        payload: userData
    }
}

export function deleteUser(id) {
    return {
        type: actionTypes.DELETING_USER,
        payload: id
    }
}

export function getUsersList() {
    return {
        type: actionTypes.GETTING_USERS_LIST,
    }
}


export function login(credentials) {
    return {
        type: actionTypes.SIGNING_IN,
        payload: credentials
    }
}
