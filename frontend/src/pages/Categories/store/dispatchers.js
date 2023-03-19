import Actions from "./actions";

//converted Post api call to redux saga

export const resetState = () =>{
    return {
        type: Actions.RESET_STATE
    }
}

export const postCategoryDataApi = (data) =>{
    return {
        type: Actions.POST_CATEGORY_DATA, data
    }
}

export const getCategoryDataApi = (page) =>{
    return {
        type: Actions.GET_CATEGORY_DATA, page
    }
}

export const updateCategoryById = (data, id) =>{
    return {
        type: Actions.UPDATE_CATEGORY_DATA, data, id
    }
}

export const deleteCategoryById = (data) =>{
    return {
        type: Actions.DELETE_CATEGORY_DATA, data,
    }
}