/**
 * Created by serj on 7/5/17.
 */
/* status indicates status of request */
let usersReducer = function(users={success:false, status:"new"}, action) {
    switch (action.type) {
        case 'GETTING_USERS_LIST':
        case 'CREATING_USER':
        case 'DELETING_USER':
            return {
                ...users,
                status:"pending",
                deleted:false
            };
            break;
        case 'GETTING_USERS_LIST_FAILURE':
        case 'CREATING_USER_FAILURE':
        case 'DELETING_USER_FAILURE':
            return {
                ...users,
                status:"done",
                success:false,
                deleted:false
            };
            break;
        case 'CREATING_USER_SUCCESS':
            return {
                ...users,
                new_user:action.data,
                success:true,
                status:"done"
            };
            break;
        case 'GETTING_USERS_LIST_SUCCESS':
            return {
                ...users,
                users_list:action.data,
                success:true,
                status:"done",
                deleted:false
            };
            break;
        case 'DELETING_USER_SUCCESS':
            return {
                ...users,
                deleted:"ok",
                success:true,
                status:"done"
            };
            break;
        default:
            return users;
    }
};

export default usersReducer
