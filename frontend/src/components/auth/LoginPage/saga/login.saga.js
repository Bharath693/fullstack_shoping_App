import { postApiCalling } from "../../../../service/AuthService";
import { call, put, takeLatest} from "redux-saga/effects";
import Actions from "../store/actions";

function getLoginToken(userDetails){
   return postApiCalling("/login", userDetails);
}

function* watchPostUserData(userDetails){
  let details =   yield call(getLoginToken, userDetails?.data);
  try {
    if(details){
        yield put({ type: Actions.GET_TOKEN_SUCCESS , details})
      }
  } catch (error) {
    yield put({ type:Actions.GET_TOKEN_FAIL,error})
  }
}

function* watchRemoveToken() {
  let token = localStorage.removeItem("token-data");
  try {
    if(token == null) {
      document.cookie = JSON.stringify(`token=null`);
      yield put({type:Actions.LOGOUT_USER_SUCCESS,token})
    }
  } catch (error) {
      yield put({type:Actions.LOGOUT_USER_FAIL,error})
  }
}

const loginSaga = [
    takeLatest(Actions.GET_TOKEN, watchPostUserData),
    takeLatest(Actions.LOGOUT_USER,watchRemoveToken)
];

export default loginSaga;