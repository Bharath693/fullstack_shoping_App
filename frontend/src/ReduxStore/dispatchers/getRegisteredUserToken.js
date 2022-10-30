import { Actions } from "../actions/RegisteredUserActions";

export const getRegisteredUserToken = (data) =>{
    return{
        type:Actions.POST_REGISTERED_USER_DATA,
        data
    }
}

export const logOutUser = () =>{
    return{
        type:Actions.LOGOUT_USER
    }
}