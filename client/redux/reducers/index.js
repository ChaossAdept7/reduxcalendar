import {combineReducers} from 'redux';
import usersReducer from './../reducers/usersReducer'
import authReducer from './../reducers/authReducer'

const rootReducer = combineReducers({
    users:usersReducer,
    auth:authReducer,
});

export default rootReducer;
