import Actions from "./actions";

export const getCategoryData = (page) =>{
    return {
        type: Actions.GET_CATEGORY_DATA, page
    }
}