import React from "react";
import Actions from "./actions";

const defaultState = {
  //Post CategoryDetails state values
  postCategoryDetails: null,
  postCategoryDetailsInProgress: false,
  postCategoryDetailsSuccess: false,
  postCategoryDetailsFail: false,

  //get CategoryDetisls state values
  categoryDetails: null,
  categoryDetailsInProgress: false,
  categoryDetailsSuccess: false,
  categoryDetailsFail: false,

  //update CategoryDetsils state values
  updateCategoryDetails: null,
  updateCategoryDetailsInProgress: false,
  updateCategoryDetailsSuccess: false,
  updateCategoryDetailsFail: false,

  //delete CategoryDetsils state values
  deleteCategoryDetails: null,
  deleteCategoryDetailsInProgress: false,
  deleteCategoryDetailsSuccess: false,
  deleteCategoryDetailsFail: false,
};

const categoryreducers = (state = defaultState, actions) => {
  switch (actions.type) {
    case Actions.RESET_STATE: {
      return { ...defaultState };
    }
    case Actions.POST_CATEGORY_DATA:
      return {
        ...state,
        postCategoryDetailsInProgress: true,
        postCategoryDetailsSuccess: false,
        postCategoryDetailsFail: false,
      };
    case Actions.POST_CATEGORY_SUCCESS:
      return {
        ...state,
        postCategoryDetailsInProgress: false,
        postCategoryDetailsSuccess: true,
        postCategoryDetails: actions.details,
        postCategoryDetailsFail: false,
      };
    case Actions.POST_CATEGORY_FAIL:
      return {
        ...state,
        postCategoryDetailsInProgress: false,
        postCategoryDetailsSuccess: false,
        postCategoryDetailsFail: true,
      };
    case Actions.GET_CATEGORY_DATA:
      return {
        ...state,
        categoryDetailsInProgress: true,
        categoryDetailsSuccess: false,
        categoryDetailsFail: false,
      };
    case Actions.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryDetailsInProgress: false,
        categoryDetailsSuccess: true,
        categoryDetails: actions?.details?.data,
        categoryDetailsFail: false,
      };
    case Actions.GET_CATEGORY_FAIL:
      return {
        categoryDetailsInProgress: false,
        categoryDetailsSuccess: false,
        categoryDetailsFail: true,
      };
    case Actions.UPDATE_CATEGORY_DATA:
      return {
        ...state,
        updateCategoryDetailsInProgress: true,
        updateCategoryDetailsInSuccess: false,
        updateCategoryDetailsFail: false,
      };
    case Actions.UPDATE_CATEGORY_DATA_SUCCESS:
      return {
        ...state,
        updateCategoryDetailsInProgress: false,
        updateCategoryDetailsSuccess: true,
        updateCategoryDetails: actions.details,
        updateCategoryDetailsFail: false,
      };
    case Actions.UPDATE_CATEGORY_DATA_FAIL:
      return {
        ...state,
        updateCategoryDetails: false,
        updateCategoryDetailsSuccess: false,
        updateCategoryDetailsFail: true,
      };
    case Actions.DELETE_CATEGORY_DATA:
      return {
        ...state,
        deleteCategoryDetailsInProgress: true,
        deleteCategoryDetailsInSuccess: false,
        deleteCategoryDetailsFail: false,
      };
    case Actions.DELETE_CATEGORY_DATA_SUCCESS:
        console.log(actions.details)
      return {
        ...state,
        deleteCategoryDetailsInProgress: false,
        deleteCategoryDetailsSuccess: true,
        deleteCategoryDetails: actions.details,
        deleteCategoryDetailsFail: false,
      };
    case Actions.DELETE_CATEGORY_DATA_FAIL:
      return {
        ...state,
        deleteCategoryDetails: false,
        deleteCategoryDetailsSuccess: false,
        deleteCategoryDetailsFail: true,
      };
    default:
      return { ...state };
  }
};

export default categoryreducers;