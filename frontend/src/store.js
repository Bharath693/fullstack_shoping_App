import reducers from "./reducers";
import { combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from "@redux-saga/core";
import rootsaga from "./saga";


const Reducers = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducers,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootsaga);

export default store;