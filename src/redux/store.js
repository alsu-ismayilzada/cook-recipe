import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipesSlice';
import categoryReducer from './categorySlice';
import searchRecipiesReducer from './searchRecipiesSlice';
import favoriteRecipiesReducer from "./favoriteRecipiesSlice";


export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    category: categoryReducer,
    searchRecipies: searchRecipiesReducer,
    favoriteRecipies: favoriteRecipiesReducer,
  }
});
