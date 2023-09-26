import { all } from 'redux-saga/effects';
import categorySaga from './pages/Categories/saga/category.saga';
import loginSaga from './components/auth/LoginPage/saga/login.saga';
import productSaga from './pages/Products/saga/product.saga';

export default function* rootsaga(){   
   yield all([
    ...productSaga,
    ...categorySaga,
    ...loginSaga,
   ])
}