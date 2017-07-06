/**
 * Created by serj on 7/5/17.
 */
import actionTypes from './../constants/ActionTypes'
import {put, takeEvery, call, all} from 'redux-saga/effects'
import {delay} from 'redux-saga'

/* CREATE USER */
function createUser(data) {
    return fetch('/users-create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(data => data.json()).catch((err) => console.log(err))
}

function* createUserAPI(action) {
    try {
        const data = yield createUser(action.payload);
        yield put({type: actionTypes.CREATING_USER_SUCCESS, data})
    } catch (e) {
        yield put({type: actionTypes.CREATING_USER_FAILURE})
    }
}

function* createUsersSaga() {
    yield takeEvery(actionTypes.CREATING_USER, createUserAPI)
}

/* USERS LIST */

function getUsersList() {
    return fetch('/users-list',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        }).then(data => data.json()).catch((err) => console.log(err));
}

function* getUsersAPI(action) {
    try {
        const data = yield getUsersList();
        yield put({type: actionTypes.GETTING_USERS_LIST_SUCCESS, data})
    } catch (e) {
        yield put({type: actionTypes.GETTING_USERS_LIST_FAILURE})
    }
}


function* getUsersSaga() {
    yield takeEvery(actionTypes.GETTING_USERS_LIST, getUsersAPI)
}

/* DELETE USER */

function deleteUser(id) {
    return fetch('/users-list',
        {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id})
        }).then(data => data.json()).catch((err) => console.log(err));
}


function* deleteUsersAPI(action) {
    try {
        const data = yield deleteUser(action.payload);
        yield put({type: actionTypes.DELETING_USER_SUCCESS, data})
    } catch (e) {
        yield put({type: actionTypes.DELETING_USER_FAILURE})
    }
}


function* deleteUsersSaga() {
    yield takeEvery(actionTypes.DELETING_USER, deleteUsersAPI)
}

/* LOGIN */


function login(credentials) {
    console.log(credentials);
    return fetch('/login',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(credentials)
        }).then(data => data.json()).catch((err) => console.log(err));
}

function* loginAPI(action) {
    try {
        const data = yield login(action.payload);
        yield put({type: actionTypes.SIGNING_IN_SUCCESS, data})
    } catch (e) {
        yield put({type: actionTypes.SIGNING_IN_FAILURE})
    }
}

function* loginSaga() {
    yield takeEvery(actionTypes.SIGNING_IN, loginAPI)
}


export default function* sagas() {
    yield all([
        createUsersSaga(),
        getUsersSaga(),
        deleteUsersSaga(),
        loginSaga()
    ])
}
