import Actions from "./actions";
import jwtDecode from "jwt-decode";


const token = localStorage.getItem("token-data");

// let checkToken = ""
//     if(token){
//       const decodeToken = jwtDecode(token);
//       const expiresIn = new Date(decodeToken.exp * 1000);
//       if(new Date() > expiresIn){
//           localStorage.removeItem("token-data");
//           checkToken = ""
//       }else{
//         checkToken = token;
//       }
//     }else{
//         checkToken = null
//     }
// console.log(checkToken)

const initialState = {
    loginDetails:null,
    loginDataProgress:false,
    loginDataSuccess:false,
    loginDataFail:false,
    
    logOutUserProgress:false,
    logOutUserSuccess: false,
    logOutUserFail:false,
    
    userLoginDetails:null
}

const loginReducer = (state = initialState, action) =>{
    switch (action.type) {
        case Actions.GET_TOKEN:
         return {
            ...state,
            loginDataProgress: true,
            loginDataSuccess: false,
            loginDataFail: false
         }
        case Actions.GET_TOKEN_SUCCESS:
            return {
                loginDetails: action.details.data.token,
                loginDataProgress: false,
                loginDataSuccess: true,
                loginDataFail: false
            }
        case Actions.GET_TOKEN_FAIL: 
            return {
                loginDataProgress: false,
                loginDataSuccess: false,
                loginDataFail: true
            }
        case Actions.USER_DETAILS:
            return{
                ...state,
                userLoginDetails: action.data
            }
        case Actions.LOGOUT_USER:
            return {
                ...state,
            logOutUserProgress: true,
            logOutUserSuccess: false,
            logOutUserFail: false
            }
        case Actions.LOGOUT_USER_SUCCESS:
            return {
            loginDetails: null,
            logOutUserProgress: false,
            logOutUserSuccess: true,
            logOutUserFail: false
            }
        case Actions.LOGOUT_USER_FAIL:
            return {
            logOutUserProgress: false,
            logOutUserSuccess: false,
            logOutUserFail: true,
            }
        default:
            return {...state}
    }
}

export default loginReducer;