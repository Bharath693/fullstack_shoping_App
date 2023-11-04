import Actions from "./Actions";

const defaultState = {
  sliderRandomData: null,
  sliderRandomDataInProgress: false,
  sliderRandomDataSuccess: false,
  sliderRandomDataFail: false,

  //allCateegory state values
  allCategoriesData: null,
  allCategoriesDataInprogress: false,
  allCategoriesDataSuccess: false,
  allCategoriesDataFail: false,
};

const HomepageSliderData = (state = defaultState, actions) => {
  switch (actions.type) {
    case Actions.RESET_STATE:
      return { ...defaultState };
    case Actions.GET_RANDOM_CATEGORIES_DATA:
      return {
        sliderRandomDataInProgress: true,
        sliderRandomDataSuccess: false,
        sliderRandomDataFail: false,
      };
    case Actions.GET_RANDOM_CATEGORIES_SUCCESS:
      return {
        sliderRandomData: actions.details,
        sliderRandomDataInProgress: false,
        sliderRandomDataSuccess: true,
        sliderRandomDataInFail: false,
      };
    case Actions.GET_RANDOM_CATEGORIES_FAIL:
      return {
        sliderRandomDataInProgress: false,
        sliderRandomDataSuccess: false,
        sliderRandomDataFail: true,
      };
    case Actions.GET_ALL_CATEGORIES_DATA:
      return {
        allCategoriesDataInprogress: true,
        allCategoriesDataSuccess: false,
        allCategoriesDataFail: false,
      };
    case Actions.GET_ALL_CATEGORIES_SUCCESS:
      return {
        allCategoriesData: actions.details,
        allCategoriesDataInprogress: false,
        allCategoriesDataSuccess: true,
        allCategoriesDataFail: false,
      };
    case Actions.GET_ALL_CATEGORIES_FAIL:
        return {
            allCategoriesDataInprogress: false,
            allCategoriesDataSuccess: false,
            allCategoriesDataFail: true,
          };
    default:
      return { ...state };
  }
};

export default HomepageSliderData;
