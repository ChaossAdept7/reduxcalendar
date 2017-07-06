/**
 * Created by serj on 7/7/17.
 */

export default function (auth={username:"",signedIn:false, status:"",error:""},action) {
    switch (action.type) {
        case 'SIGNING_IN':
            return {
                ...auth,
                status:"pending",
                error:""
    };
        case 'SIGNING_IN_SUCCESS':
            if(!action.data.username)
                return {
                    ...auth,
                    status:"done",
                    signedIn:false,
                    error:"Wrong Login or Username",
                }
            return {
                ...auth,
                status:"done",
                signedIn:true,
                username:action.data.username,
                id:action.data._id,
                error:""
            };
        case 'SIGNING_IN_FAILURE':
            return {
                ...auth,
                status:"done",
                error:""
            };
        default:
            return auth;
    }
}