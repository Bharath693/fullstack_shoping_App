import categoryreducers from "./pages/Categories/store/reducers";
import loginReducer from "./components/auth/LoginPage/store/reducer";
import productReducer from  "./pages/Products/store/reducers";

const reducers = {
    category: categoryreducers,
    login: loginReducer,
    product: productReducer
}

export default reducers;