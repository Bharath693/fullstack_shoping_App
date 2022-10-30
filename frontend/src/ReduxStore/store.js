import { combineReducers, applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import RegisteredUserToken from "./reducers/RegisteredUserReducer";

const rootReducer = combineReducers({
      userToken:RegisteredUserToken
});

const middleware = [thunk];

export const ReduxStore = createStore(rootReducer,applyMiddleware(...middleware));