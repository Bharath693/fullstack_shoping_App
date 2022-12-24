import { all } from 'redux-saga/effects'
import categorySaga from './pages/Categories/saga/category.saga'

export default function* rootsaga(){
   
   yield all([
    ...categorySaga,
   ])
}