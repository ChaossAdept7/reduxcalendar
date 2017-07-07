/**
 * Created by serj on 6/21/17.
 */
import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
    "CREATE_USER",
    "LOGIN",
    "CREATING_USER",
    "CREATING_USER_FAILURE",
    "CREATING_USER_SUCCESS",
    "GETTING_USERS_LIST",
    "GETTING_USERS_LIST_FAILURE",
    "GETTING_USERS_LIST_SUCCESS",
    "DELETING_USER",
    "DELETING_USER_FAILURE",
    "DELETING_USER_SUCCESS",
    "SIGNING_IN",
    "SIGNING_IN_SUCCESS",
    "SIGNING_IN_FAILURE",
    "LOGOUT"
]);

export default actionTypes;