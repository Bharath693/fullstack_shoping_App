import Actions from "./Actions";

export const getRandomCategories = (data) =>{
   return {
    type:Actions.GET_RANDOM_CATEGORIES_DATA, data
   }
}

export const getAllCategories = () =>{
   return {
      type: Actions.GET_ALL_CATEGORIES_DATA
   }
}