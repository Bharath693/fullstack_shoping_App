import {call, put, takeLatest} from 'redux-saga/effects';
import { postApiCallingWithImageUpload } from "../../../service/AuthService";
import { postApiCalling, getApiCalling } from "../../../service/AuthService";
import Actions from "../store/actions";

function postProductDataApi(createProduct) {
  return postApiCalling("/api/createProduct",createProduct.data)
 }

function getProductApi(page) {
    return getApiCalling(`/getAllProducts/:${page.page}`)
}

 function* watchPostProductDetails(data){
  let details = yield call(postProductDataApi,data)
  try {
    if(details){
      yield put({type:Actions.POST_PRODUCT_SUCCESS,details})
    }
  } catch (error) {
      yield put({type:Actions.POST_PRODUCT_FAIL,error})
  }
}

function* watchGetAllProductsDetails(page) {
  let details = yield call(getProductApi, page)
  try {
    if(details) {
      yield put({type: Actions.GET_ALL_PRODUCTS_SUCCESS, details})
    }
  } catch (error) {
    yield put({type:Actions.GET_ALL_PRODUCTS_FAIL, error})
  }
} 

const productSaga = [
  takeLatest(Actions.POST_PRODUCT_DATA, watchPostProductDetails),
  takeLatest(Actions.GET_All_PRODUCTS_DATA, watchGetAllProductsDetails)
];

export default productSaga