import Actions from "./actions";

export const resetState = () =>{
    return {
        type: Actions.RESET_STATE
    }
}

export const postProductDataApi = (data) =>{
    return {
        type: Actions.POST_PRODUCT_DATA, data
    }
}

export const getAllProductsApi = (page) =>{
    return {
        type: Actions.GET_All_PRODUCTS_DATA, page
    }
}