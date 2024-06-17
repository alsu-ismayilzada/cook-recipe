import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async () => {
    const response = await fetch("https://api.edamam.com/search?q=chicken&app_id=0f548bd3&app_key=2d54297ba513eef8b6e6c8221bd43aac&from=0&to=6");
    const data = await response.json();
    return data.hits.map(hit => hit.recipe);
  }
);


const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default recipesSlice.reducer;
