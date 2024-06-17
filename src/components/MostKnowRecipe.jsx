import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/recipesSlice';
import "../styles/MostKnowRecipe.css";
import Cooks from './Cooks';

const MostKnowRecipe = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.items);
  const recipeStatus = useSelector((state) => state.recipes.status);
  const error = useSelector((state) => state.recipes.error);
  const favoriteRecipies = useSelector((state) => state.favoriteRecipies);

  useEffect(() => {
    if (recipeStatus === 'idle') {
      dispatch(fetchRecipes());
    }
    
  }, [recipeStatus, dispatch]);

  let content;

  if (recipeStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (recipeStatus === 'succeeded') {
    content = recipes.map((recipe, index) => {
      const isFavorite = favoriteRecipies.some(favRecipe => favRecipe.label === recipe.label);
      return <Cooks key={index} index={index} {...recipe} isFavorite={isFavorite} />;
    });
  } else if (recipeStatus === 'failed') {
    content = <p>Error: {error}</p>;
  }

  return (
    <div className='mostKnowRecipe'>
      <h1>Most Know Recipe</h1><br />
      <div className='recipies'>
        {content}
      </div>
    </div>
  );
};

export default MostKnowRecipe;
