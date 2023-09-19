const actions = {
    RESET_STATE: "RESET_STATE",

    POST_PRODUCT_DATA:"POST_PRODUCT_DATA",
    POST_PRODUCT_SUCCESS:"POST_PRODUCT_SUCCESS",
    POST_PRODUCT_FAIL:"POST_PRODUCT_FAIL",

    //get All products
    GET_All_PRODUCTS_DATA:"GET_All_PRODUCTS_DATA",
    GET_ALL_PRODUCTS_SUCCESS:"GET_ALL_PRODUCTS_SUCCESS",
    GET_ALL_PRODUCTS_FAIL:"GET_ALL_PRODUCTS_FAIL",

    //get Product by id
    GET_PRODUCT_BY_ID_DATA:"GET_PRODUCT_BY_ID_DATA",
    GET_PRODUCT_BY_ID_DATA_SUCCESS:"GET_PRODUCT_BY_ID_DATA_SUCCESS",
    GET_PRODUCT_BY_ID_DATA_FAIL:"GET_PRODUCT_BY_ID_DATA_FAIL",

    //update Product by id
    UPDATE_PRODUCT_BY_ID_DATA:"UPDATE_PRODUCT_BY_ID_DATA",
    UPDATE_PRODUCT_BY_ID_DATA_SUCCESS:"UPDATE_PRODUCT_BY_ID_DATA_SUCCESS",
    UPDATE_PRODUCT_BY_ID_DATA_FAIL:"UPDATE_PRODUCT_BY_ID_DATA_FAIL",

    //delete Product by id
    DELETE_PRODUCT_BY_ID_DATA:"DELETE_PRODUCT_BY_ID_DATA",
    DELETE_PRODUCT_BY_ID_DATA_SUCCESS:"DELETE_PRODUCT_BY_ID_DATA_SUCCESS",
    DELETE_PRODUCT_BY_ID_DATA_FAIL:"DELETE_PRODUCT_BY_ID_DATA_FAIL"
}

export default actions