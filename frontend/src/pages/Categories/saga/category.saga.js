import { call, put, takeLatest } from 'redux-saga/effects';
import { postApiCalling } from "../../../service/AuthService";
import Actions from "../store/actions"

function getCategoryApiCall(page){
  postApiCalling(`/categories/${page}`);
}

function* watchGetCategoryDetails(page){
    console.log(page)
    try {
       const details =  yield call(getCategoryApiCall,page);
       if(details) {
         yield put({
            type:Actions.categoryDetailsSuccess, details
         })
       }
    } catch (error) {
        yield put({type:Actions.categoryDetailsFail, error})
    }
}

const categorySaga = [
    takeLatest(Actions.GET_CATEGORY_DATA, watchGetCategoryDetails)
]

export default categorySaga