import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const favoriteRecipiesSlice = createSlice({
    name: 'favoriteRecipies',
    initialState,
    reducers: {
        addRecipies: (state, action) => {
            state.push({
                index: action.payload.index,
                image: action.payload.image,
                label: action.payload.label,
                totalTime: action.payload.totalTime,
                calories: action.payload.calories,
                cuisineType: action.payload.cuisineType,
                mealType: action.payload.mealType,
                dietLabels: action.payload.dietLabels,
                ingredientLines: action.payload.ingredientLines,
                url: action.payload.url
            });
        },
        clearRecipies: (state, action) => {
            state.splice(state.findIndex(recipe => recipe.label === action.payload.label), 1);
        }
    },
});

export const { addRecipies, clearRecipies } = favoriteRecipiesSlice.actions;

export default favoriteRecipiesSlice.reducer;
