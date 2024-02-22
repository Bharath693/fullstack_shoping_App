import { all } from 'redux-saga/effects';
import categorySaga from './pages/Categories/saga/category.saga';
import loginSaga from './components/auth/LoginPage/saga/login.saga';
import productSaga from './pages/Products/saga/product.saga';
import HomePageProductSaga from './components/HomePageProducts/saga/HomePageProducts.saga';
import CatProductsSaga from './pages/CatProducts/saga/CatProducts.saga';
import paymentSaga from './pages/Cart/saga/payment.saga';

export default function* rootsaga(){   
   yield all([
    ...productSaga,
    ...categorySaga,
    ...loginSaga,
    ...HomePageProductSaga,
    ...CatProductsSaga,
    ...paymentSaga
   ])
}