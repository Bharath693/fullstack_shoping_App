import Actions from "./actions";

//need to work on post api call, previosuly did using redux thun,know need to convert to redux saga
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