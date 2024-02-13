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

export const getProductById = (id) =>{
    return {
        type: Actions.GET_PRODUCT_BY_ID_DATA, id
    }
}

export const updateProductById = (id, data) =>{
    return {
        type : Actions.UPDATE_PRODUCT_BY_ID_DATA, 
        id, 
        data
    }
}

export const deleteProductById = (id) =>{
    return {
        type: Actions.DELETE_PRODUCT_BY_ID_DATA,
        id
    }
}

export const getProductDetailsById = (id) =>{
    return {
        type: Actions.PRODUCT_DETAILS_BY_ID,
        id
    }
}

export const addCartItem = (details) =>{
    return {
        type: Actions.CART_ITEMS_SUCCESS,
        details
    }
}

export const IncCartQuantity = (id) =>{
    return {
       type:Actions.INC_QUANTITY,
       id
    }
}

export const DecCartQuantity = (id) =>{
    return {
        type:Actions.DEC_QUANTITY,
        id
    }
}

export const removeItemFromCart = (data) =>{
    return {
        type:Actions.REMOVE_ITEM_FROM_CART,
        data
    }
}