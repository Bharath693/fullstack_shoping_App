
import { call, put, takeLatest } from 'redux-saga/effects';
import { getApiCalling } from "../../../service/AuthService";
import Actions from '../store/Actions';

function getRandomCategoriesApiCall() {
    return getApiCalling("/random-category")
}

function getAllCategories() {
    return getApiCalling("/allCategories")
}

function* getRandomCategoryDetails() {
    let details = yield call(getRandomCategoriesApiCall)
    try {
        if(details) {
            yield put({type: Actions.GET_RANDOM_CATEGORIES_SUCCESS, details})
        }
    } catch (error) {
        yield put({type: Actions.GET_RANDOM_CATEGORIES_FAIL, error})
    }
}

function* getAllCategoryDetails() {
    let details = yield call(getAllCategories)
    try {
        if(details) {
            yield put({type: Actions.GET_ALL_CATEGORIES_SUCCESS, details})
        }
    } catch (error) {
            yield put({type: Actions.GET_ALL_CATEGORIES_FAIL, error})
    }
}

const HomePageProductSaga = [
    takeLatest(Actions.GET_RANDOM_CATEGORIES_DATA, getRandomCategoryDetails),
    takeLatest(Actions.GET_ALL_CATEGORIES_DATA, getAllCategoryDetails)
]

export default HomePageProductSaga