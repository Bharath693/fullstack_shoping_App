import Actions from './actions'

export function getUserDetails(data){
    return {
        type: Actions.USER_DETAILS, data
    }
}
export function getToken(data){
    return {
        type:Actions.GET_TOKEN, data
    }
}

export function removeUserToken() {
    return {
        type:Actions.LOGOUT_USER, 
    }
}