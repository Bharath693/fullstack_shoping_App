import React from 'react';
import Actions from "./actions"

const defaultState = {
    //get CategoryDetisls state values
    categoryDetails:null,
    categoryDetailsInProgress:false,
    categoryDetailsSuccess:false,
    categoryDetailsFail:false,

    //update CategoryDetsils state values
    updateCategoryDetails:null,
    updateCategoryDetailsInProgress:false,
    updateCategoryDetailsSuccess:false,
    updateCategoryDetailsFail:false
  } 

const categoryreducers = (state = defaultState,actions) => {
  
  switch (actions.type) {
    case Actions.GET_CATEGORY_DATA:
        return {
            ...state,
            categoryDetailsInProgress:true,
            categoryDetailsSuccess:false,
            categoryDetailsFail:false
        }
    case Actions.GET_CATEGORY_SUCCESS:
        return {
            ...state,
            categoryDetailsInProgress:false,
            categoryDetailsSuccess:true,
            categoryDetails:actions?.details?.data,
            categoryDetailsFail:false
        }
    case Actions.GET_CATEGORY_Fail:
        return {
            categoryDetailsInProgress:false,
            categoryDetailsSuccess:false,
            categoryDetailsFail:true
        }
    case Actions.UPDATE_CATEGORY_DATA:
        return {
            ...state,
            categoryDetailsInProgress:true,
            categoryDetailsInSuccess:false,
            categoryDetailsFail:false
        }
    case Actions.UPDATE_CATEGORY_DATA_SUCCESS:
        return{
            ...state,
            updateCategoryDetailsInProgress:false,
             updateCategoryDetailsSuccess:true,
            updateCategoryDetails:actions.details,
            updateCategoryDetailsFail:false,
        }
    case Actions.UPDATE_CATEGORY_DATA_FAIL:
        return {
            ...state,
            updateCategoryDetails:false,
            updateCategoryDetailsSuccess:false,
            updateCategoryDetailsFail:true
        }
    default:
        return {...state}
  }
}

export default categoryreducers