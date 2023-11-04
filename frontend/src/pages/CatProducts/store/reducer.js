import Actions from "./actions";

const defaultState = {
     
    catProductData:null,
    catProductDatainProgress:false,
    catProductDataSuccess:false,
    catProductDataFail:false
}

const catProductReducer = (state = defaultState, actions) =>{
    switch (actions.type) {
        case Actions.RESET_STATE:
            return {
                ...state
            }
        case Actions.PRODUCT_CATEGORY_DATA:
            return {
                ...state,
                catProductDatainProgress:true,
                catProductDataSuccess:false,
                catProductDataFail:false
            }
        case Actions.PRODUCT_CATEGORY_SUCCESS:
            return {
                ...state,
                catProductData:actions.details,
                catProductDatainProgress: false,
                catProductDataSuccess: true,
                catProductDataFail: false
            }
        case Actions.PRODUCT_CATEGORY_FAIL:
            return {
                ...state,
                catProductDatainProgress: false,
                catProductDataSuccess: false,
                catProductDataFail: true
            }
        default:
            return {
                ...state
            }
    }
}

export default catProductReducer