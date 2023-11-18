import Actions from "./actions";

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
  getProductDataByIdFail: false
};

const productreducers = (state = defaultState, actions) => {
  switch (actions.type) {
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
        postProductDetails: actions.details,
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
        getAllProductsDetails: actions.details,
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
        getProductByIdDetails: actions.details,
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
      console.log(actions.details,"reducer")
      return {
        ...state,
        getProductDataById: actions.details,
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
    default:
   
      return { ...state };
  }
};

export default productreducers;
