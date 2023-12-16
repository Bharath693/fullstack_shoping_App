import { call, put, takeLatest} from 'redux-saga/effects';
import Actions from '../store/actions';
import { getApiCalling } from "../../../service/AuthService"

function getCatProductsApiCall(data) {
    if(data) {
      return  getApiCalling(`/cat-products/${data.category}/${data.page}`)
    }
      
}

function* watchGetCatProductDetails(data) {
    let details = yield call(getCatProductsApiCall,data);
    try {
        if(details) {
            yield put({type:Actions.PRODUCT_CATEGORY_SUCCESS, details})
        }
    } catch (error) {
          yield put({type:Actions.PRODUCT_CATEGORY_FAIL, error})
    }
}

const catProductsSaga = [
    takeLatest(Actions.PRODUCT_CATEGORY_DATA, watchGetCatProductDetails)
]

export default catProductsSaga;