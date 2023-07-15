import {call, put, takeLatest} from 'redux-saga/effects';
import { postApiCallingWithImageUpload } from "../../../service/AuthService";
import Actions from "../store/actions";

function postProductDataApi(createProduct) {
  return postApiCallingWithImageUpload("/api/createProduct",createProduct.data)
 }

 function* watchPostProductDetails(data){
  let details = yield call(postProductDataApi,data)
  try {
    if(details){
      yield put({type:Actions.POST_PRODUCT_SUCCESS,details})
    }
  } catch (error) {
    console.log(error)
      yield put({type:Actions.POST_PRODUCT_FAIL,error})
  }
}

const productSaga = [
  takeLatest(Actions.POST_PRODUCT_DATA, watchPostProductDetails)
];

export default productSaga