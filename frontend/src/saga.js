import { all } from 'redux-saga/effects';
import categorySaga from './pages/Categories/saga/category.saga';
import loginSaga from './pages/auth/LoginPage/saga/login.saga';

export default function* rootsaga(){
   
   yield all([
    ...categorySaga,
    ...loginSaga,
   ])
}