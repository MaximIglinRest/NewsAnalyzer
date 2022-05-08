import { combineReducers } from '@reduxjs/toolkit';
import PopularWordsReducer from "./PopularWordsReducer";
import ActivityReducer from "./ActivityReducer";
import ActivityByCategoriesReducer from "./ActivityByCategoriesReducer";

export default combineReducers({
  PopularWords: PopularWordsReducer,
  Activity: ActivityReducer,
  ActivityByCategories: ActivityByCategoriesReducer
})

