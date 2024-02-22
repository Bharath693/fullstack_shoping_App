import categoryreducers from "./pages/Categories/store/reducers";
import loginReducer from "./components/auth/LoginPage/store/reducer";
import productReducer from  "./pages/Products/store/reducers";
import HomepageSliderData from "./components/HomePageProducts/store/reducer";
import catProductReducer from "./pages/CatProducts/store/reducer";
import paymentReducer from "./pages/Cart/store/reducer";

const reducers = {
    category: categoryreducers,
    login: loginReducer,
    product: productReducer,
    HomepageSlider: HomepageSliderData,
    catProducts: catProductReducer,
    payment: paymentReducer
}

export default reducers;