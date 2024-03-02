import { getApiCalling } from "../../../service/AuthService";
import { call, put, takeLatest } from "redux-saga/effects";
import Actions from "../store/actions";

async function verifyPayment(data) {
    return await getApiCalling(`/verify-payment/:${data.id}`)
}

function* watchPaymentVerify(data) {
  let details =  yield call(verifyPayment,data);
  console.log("details",details)
  try {
    if(details) {
        yield put({type: Actions.VERIFY_PAYMENT_SUCCESS, details})
    }
  } catch (error) {
     yield put({type: Actions.VERIFY_PAYMENT_FAIL, error})
  }
}

let verifyPaymentSaga = [
    takeLatest(Actions.VERIFY_PAYMENT, watchPaymentVerify)
]

export default verifyPaymentSaga