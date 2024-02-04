import {call, put, takeLatest} from 'redux-saga/effects';
import { postApiCallingWithImageUpload } from "../../../service/AuthService";
import { postApiCalling, getApiCalling, updateApiCalling, deleteApiCalling  } from "../../../service/AuthService";
import Actions from "../store/actions";

function postProductDataApi(createProduct) {
  return postApiCalling("/api/createProduct",createProduct.data)
 }

function getProductApi(page) {
    return getApiCalling(`/getAllProducts/:${page.page}`)
}

function getProductByIdApi(id) {
  if(id) {
    return getApiCalling(`/getProductById/${id?.id}`)
  }
}

function updateProductById(data) {
  return updateApiCalling(`/updateProductById/${data.id}`,data.data)
}

function deleteProductById(data) {
    return deleteApiCalling(`/deleteProductById/${data.id}`)
}

function getProductDetailsByID(data) {
    return getApiCalling(`/cat-products/${data?.id}`)
}

 function* watchPostProductDetails(data){
  let details = yield call(postProductDataApi,data);
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

function* watchGetProductByIdDetails(id) {
  let details = yield call(getProductByIdApi, id);
  try {
    if(details){
      yield put({type: Actions.GET_PRODUCT_BY_ID_DATA_SUCCESS, details})
    }
  } catch (error) {
    yield put({ type: Actions.GET_PRODUCT_BY_ID_DATA_FAIL, error})
  }
}

function* watchUpdateProductByIdDetails(data) {
  let details = yield call(updateProductById, data);
  try {
     if(details) {
      yield put({type: Actions.UPDATE_PRODUCT_BY_ID_DATA_SUCCESS, details})
     }
  } catch (error) {
      yield put({type: Actions.UPDATE_PRODUCT_BY_ID_DATA_FAIL, error})
  }
}

function* watchDeleteProductByIdDetails(data) {
  let details =   yield call(deleteProductById,data);
}

function* watchGetProductDetailsById(data) {
  let details =   yield call(getProductDetailsByID,data);
  try {
     if(details) {
      yield put({ type:Actions.PRODUCT_DETAILS_BY_ID_SUCCESS, details })
     }
  } catch (error) {
      yield put({type: Actions.PRODUCT_DETAILS_BY_ID_FAIL, error})
  }
}


const productSaga = [
  takeLatest(Actions.POST_PRODUCT_DATA, watchPostProductDetails),
  takeLatest(Actions.GET_All_PRODUCTS_DATA, watchGetAllProductsDetails),
  takeLatest(Actions.GET_PRODUCT_BY_ID_DATA, watchGetProductByIdDetails),
  takeLatest(Actions.UPDATE_PRODUCT_BY_ID_DATA, watchUpdateProductByIdDetails),
  takeLatest(Actions.DELETE_PRODUCT_BY_ID_DATA, watchDeleteProductByIdDetails),
  takeLatest(Actions.PRODUCT_DETAILS_BY_ID, watchGetProductDetailsById)
];

export default productSaga