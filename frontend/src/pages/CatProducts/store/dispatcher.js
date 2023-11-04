import Actions from "./actions";

export const ProductCategoryDispatcher = (category,page) =>{
    return {
        type: Actions.PRODUCT_CATEGORY_DATA, category, page
    }
}