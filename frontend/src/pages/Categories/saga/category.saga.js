import { call, put, takeLatest } from 'redux-saga/effects';
import { postApiCalling, getApiCalling } from "../../../service/AuthService";
import Actions from "../store/actions"

function getCategoryApiCall(page){
  return getApiCalling(`/categories/${page}`);
}

function* watchGetCategoryDetails(page){
  let details = yield call(getCategoryApiCall,page.page);
  try {
     if(details) {
      yield put({type:Actions.GET_CATEGORY_SUCCESS, details})
     }
  } catch (error) {
     yield put({type:Actions.GET_CATEGORY_FAIL, error})
  }
}

const categorySaga = [
    takeLatest(Actions.GET_CATEGORY_DATA, watchGetCategoryDetails)
]

export default categorySaga