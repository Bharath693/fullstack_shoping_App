import { call, put, takeLatest } from 'redux-saga/effects';
import { postApiCalling, getApiCalling, updateApiCalling, deleteApiCalling } from "../../../service/AuthService";
import Actions from "../store/actions"

function postCategoryDataApi(createCategory) {
 return postApiCalling("/api/createCategory",createCategory.data)
}

function getCategoryApiCall(page){
  return getApiCalling(`/categories/${page}`);
}

function updateCategoryById(data){
  return updateApiCalling(`/updateCategoryByID/${data?.id}`,data.data)
}

function deleteCategoryById(data){
  return deleteApiCalling(`/deleteCategoryByID/${data.data._id}`)
}

function* watchPostCategoryDetails(data){
  let details = yield call(postCategoryDataApi,data)
  try {
    if(details){
      yield put({type:Actions.POST_CATEGORY_SUCCESS,details})
    }
  } catch (error) {
      yield put({type:Actions.POST_CATEGORY_FAIL,error})
  }
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

function* watchUpdateCategoryDetailsById(data){
  let details = yield call(updateCategoryById,data);
  try {
    if(details) {
      yield put({type:Actions.UPDATE_CATEGORY_DATA_SUCCESS, details})
    }
  } catch (error) {
      yield put({type:Actions.UPDATE_CATEGORY_DATA_FAIL, error})
  }
}

function* watchDeleteCategoryDetailsById(data){
  let details = yield call(deleteCategoryById,data);
  try {
    if(details) {
      yield put({type:Actions.DELETE_CATEGORY_DATA_SUCCESS, details})
    }
  } catch (error) {
      yield put({type:Actions.DELETE_CATEGORY_DATA_FAIL, error})
  }
}

const categorySaga = [
    takeLatest(Actions.GET_CATEGORY_DATA, watchGetCategoryDetails),
    takeLatest(Actions.POST_CATEGORY_DATA, watchPostCategoryDetails),
    takeLatest(Actions.UPDATE_CATEGORY_DATA, watchUpdateCategoryDetailsById),
    takeLatest(Actions.DELETE_CATEGORY_DATA, watchDeleteCategoryDetailsById)
]

export default categorySaga