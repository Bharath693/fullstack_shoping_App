import Actions from "./actions";

const defaultState = {
  postProductDetails: null,
  postProductDetailsInProgress: false,
  postProductDetailsSuccess: false,
  postProductDetailsFail: false,
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
    default:
      return { ...state };
  }
};

export default productreducers;
