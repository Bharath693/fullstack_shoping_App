import React from 'react';
import Actions from "./actions"

const defaultState = {
    categoryDetails:null,
    categoryDetailsInProgress:false,
    categoryDetailsSuccess:false,
    categoryDetailsFail:false
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
  
    default:
        return {...state}
  }
}

export default categoryreducers