import { call, put, takeLatest } from 'redux-saga/effects'
import { postApiCalling } from '../../../service/AuthService'
import Actions from '../store/action'
import axios from 'axios'

const cartPayment = (data) =>{
     return postApiCalling("/api/create-checkout-session",data.data)
}

function* watchPostPaymentDetails(data){
    let details = yield call(cartPayment,data);
    // console.log("saga",details)
    try {
        if(details) {
            yield put({type:Actions.POST_PAYMENT_DATA_SUCCESS, details})
        }
    } catch (error) {
            yield put({type:Actions.POST_PAYMENT_DATA_FAIL, error})
    }
}

const paymentSaga = [
    takeLatest(Actions.POST_PAYMENT_DATA, watchPostPaymentDetails)
];

export default paymentSaga