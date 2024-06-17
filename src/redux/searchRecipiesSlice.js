import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const searchRecipiesSlice = createSlice({
    name: 'searchRecipies',
    initialState,
    reducers: {
        addRecipies: (state, action) => {
            state.push({
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
        clearRecipies: (state) => {
            return initialState;
        }
        
    },
});

export const { addRecipies, clearRecipies } = searchRecipiesSlice.actions;

export default searchRecipiesSlice.reducer;
