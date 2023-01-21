import categoryreducers from "./pages/Categories/store/reducers";
import loginReducer from "./pages/auth/LoginPage/store/reducer"

const reducers = {
    category: categoryreducers,
    login: loginReducer
}

export default reducers;