import { createSlice } from '@reduxjs/toolkit';

const initialState = [];


const searchKeysSlice = createSlice({
    name: 'searchKeys',
    initialState,
    reducers: {
        addKeys: (state, action) => {
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
        clearKeys: (state) => {
            return initialState;
        }
    },
});

export const { addKeys, clearKeys } = searchKeysSlice.actions;

export default searchKeysSlice.reducer;
