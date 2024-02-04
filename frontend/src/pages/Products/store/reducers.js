import { discount } from "../../../util/discount";
import Actions from "./actions";
let cartData = localStorage.getItem("cart");
let cartArray = cartData ? JSON.parse(cartData) : [];

function allItems(data) {
  let items = 0;
  for(let i=0; i<data.length; i++) {
      items += data[i].quantity 
  }
  return items;
}

function calculateTotal(data) {
  let total = 0;
for(let i=0; i<data.length; i++) {
    total += discount(data[i]) * data[i].quantity
}
return total;
}

const defaultState = {
  postProductDetails: null,
  postProductDetailsInProgress: false,
  postProductDetailsSuccess: false,
  postProductDetailsFail: false,

  //get All Products
  getAllProductsDetails: null,
  getAllProductDetailsInProgress: false,
  getAllProductsDetailsSuccess: false,
  getAllProductsDetailsFail: false,

  //get Product by id
  getProductByIdDetails: null,
  getProductDetailsByIdInProgress:false,
  getProductsDetailsByIdSuccess: false,
  getProductsDetailsByIdFail: false,

  //getProductDetailsById for particuar product Data
  getProductDataById: null,
  getProductDataByIdInProgress: false,
  getProductDataByIdSuccess: false,
  getProductDataByIdFail: false,

  //cartItems
  addCartItem: cartArray.length > 0 ? cartArray : [],
  addCartTotalItems: cartArray.length > 0 ? allItems(cartArray) : 0,
  addCartTotalCount: cartArray.length > 0 ? calculateTotal(cartArray) : 0,
  addCartItemSuccess:false,
  addCartItemFail:false
};

const productreducers = (state = defaultState, action) => {
  switch (action.type) {
    case Actions.RESET_STATE: {
      return { ...defaultState };
    }
    case Actions.POST_PRODUCT_DATA: {
      return {
        ...state,
        postProductDetailsInProgress: true,
        postProductDetailsSuccess: false,
        postProductDetailsFail: false,
      };
    }
    case Actions.POST_PRODUCT_SUCCESS: {
        return {
            ...state,
        postProductDetailsInProgress: false,
        postProductDetailsSuccess: true,
        postProductDetails: action.details,
        postProductDetailsFail: false,
        }
    }
    case Actions.POST_PRODUCT_FAIL: {
        return {
            ...state,
        postProductDetailsInProgress: false,
        postProductDetailsSuccess: false,
        postProductDetailsFail: true,
        }
    }

    case Actions.GET_All_PRODUCTS_DATA : {
      return {
        ...state,
        getAllProductsDetailsInProgress: true,
        getAllProductsDetailsSuccess: false,
        getAllProductsDetailsFail: false
      }
    }

    case Actions.GET_ALL_PRODUCTS_SUCCESS: {
      return {
        ...state,
        getAllProductsDetailsInProgress: false,
        getAllProductsDetailsSuccess: true,
        getAllProductsDetails: action.details,
        getAllProductsDetailsFail: false
      }
    }

    case Actions.GET_ALL_PRODUCTS_FAIL: {
      return {
        ...state,
        getAllProductDetailsInProgress: false,
        getAllProductsDetailsSuccess: false,
        getAllProductsDetailsFail: true
      }
    }

    case Actions.GET_PRODUCT_BY_ID_DATA : 
    return {
      ...state,
      getProductDetailsByIdInProgress:true,
      getProductsDetailsByIdSuccess:false,
      getProductsDetailsByIdFail:false
    }
    
    case Actions.GET_PRODUCT_BY_ID_DATA_SUCCESS :
      return {
        ...state,
        getProductDetailsByIdInProgress:false,
        getProductsDetailsByIdSuccess: true,
        getProductByIdDetails: action.details,
        getProductsDetailsByIdFail: false,
      }
    case Actions.GET_PRODUCT_BY_ID_DATA_FAIL :
      return {
        ...state,
        getProductDetailsByIdInProgress:false,
        getProductsDetailsByIdSuccess:false,
        getProductsDetailsByIdFail:true
      }
    case Actions.PRODUCT_DETAILS_BY_ID :
      return {
        ...state,
        getProductDataByIdInProgress: true,
        getProductDataByIdSuccess: false,
        getProductDataByIdFail: false
      }
    case Actions.PRODUCT_DETAILS_BY_ID_SUCCESS :
      return {
        ...state,
        getProductDataById: action.details,
        getProductDataByIdInProgress: false,
        getProductDataByIdSuccess: true,
        getProductDataByIdFail: false
      }
    case Actions.PRODUCT_DETAILS_BY_ID_FAIL :
      return {
        ...state,
        getProductDataByIdInProgress: false,
        getProductDataByIdSuccess: false,
        getProductDataByIdFail: true
        }
    case Actions.CART_ITEMS_SUCCESS: 
      return {
        ...state,
        addCartItem: action.details,
        addCartItemSuccess: true,
        addCartItemFail: false,
      }
    // case Actions.INC_QUANTITY: 
    //  const find = state.addCartItem.find((item) => item._id === action.id);
    //  if(find){
    //   find.quantity += 1;
    //   state.addCartTotalItems += 1;
    //   state.addCartTotalCount += discount(find)
    //  }
    // return {...state}
    default:
   
      return { ...state };
  }
};

export default productreducers;
