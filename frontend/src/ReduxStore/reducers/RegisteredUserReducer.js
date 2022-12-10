import { Actions } from "../actions/RegisteredUserActions";
import jwtDecode from "jwt-decode";

const token = localStorage.getItem("token-data");

let checkToken = ""
    if(token){
      const decodeToken = jwtDecode(token);
      const expiresIn = new Date(decodeToken.exp * 1000);
      if(new Date() > expiresIn){
          localStorage.removeItem("token-data");
          checkToken = ""
      }else{
        checkToken = token;
      }
    }else{
        checkToken = null
    }

const initialState = {
    registeredUserTokenData: checkToken,
    registeredDataInprogress: false,
    registeredDataSuccess: false,
    registeredDataFail: false
}

// console.log(checkToken);
const RegisteredUserToken = (state = initialState, action) => {
    switch (action.type) {
        case Actions.POST_REGISTERED_USER_DATA:
            return {
                ...state,
                registeredDataInprogress: true,
                registeredDataSuccess: false,
                registeredDataFail: false,
                registeredUserTokenData: action.data?.data?.token,
            }
        case Actions.POST_REGISTERED_USER_DATA_SUCCESS:
            return {
                ...state,

                registeredDataInprogress: false,
                registeredDataSuccess: true,
                registeredDataFail: false
            }
        case Actions.POST_REGISTERED_USER_DATA_FAILURE:
            return {
                ...state,
                registeredDataInprogress: false,
                registeredDataSuccess: false,
                registeredDataFail: true
            }
        case Actions.LOGOUT_USER:
            return {

                checkToken: null
            }

        default:
            return state;
    }
}

export default RegisteredUserToken;