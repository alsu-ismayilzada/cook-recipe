import React from 'react';
import "../styles/Categories.css";
import breakfast from "../images/breakfast.jpg";
import brunch from "../images/brunch.jpg";
import dessert from "../images/dessert.jpg";
import lunch from "../images/lunchh.jpeg";
import salad from "../images/salad.jpg";
import snack from "../images/snack.jpg";
import { useDispatch } from 'react-redux';
import { addRecipies, clearRecipies  } from '../redux/searchRecipiesSlice';
import { NavLink } from 'react-router-dom';

const Categories = () => {
    const dispatch = useDispatch();

    const handleCategoryClick = (category) => {
        dispatch(clearRecipies());
        fetch(`https://api.edamam.com/search?app_id=0f548bd3&app_key=2d54297ba513eef8b6e6c8221bd43aac&q=${category}`)
            .then(res => res.json())
            .then(data => {
                data.hits.forEach(hit => {
                    dispatch(addRecipies({
                        image: hit.recipe.image,
                        label: hit.recipe.label,
                        totalTime: hit.recipe.totalTime,
                        calories: hit.recipe.calories,
                        cuisineType: hit.recipe.cuisineType,
                        mealType: hit.recipe.mealType,
                        dietLabels: hit.recipe.dietLabels,
                        ingredientLines: hit.recipe.ingredientLines,
                        url: hit.recipe.url
                    }));
                });
            })
            .catch(error => console.error('Error fetching recipes:', error));
    };
    return (
      <div className='PopularCategories'>
        <h1>Popular categories</h1>
        <div className='categories'>
          <NavLink to="/recipies"><div className='categori' onClick={() => handleCategoryClick('breakfast')}>
            <img src={breakfast} alt="" />
            <p>Breakfast</p>
          </div></NavLink>
          <NavLink to="/recipies"><div className='categori' onClick={() => handleCategoryClick('brunch')}>
            <img src={brunch} alt="" />
            <p>Brunch</p>
          </div></NavLink>
          <NavLink to="/recipies"><div className='categori' onClick={() => handleCategoryClick('lunch')}>
            <img src={lunch} alt="" />
            <p>Lunch/Dinner</p>
          </div></NavLink>
          <NavLink to="/recipies"><div className='categori' onClick={() => handleCategoryClick('snack')}>
            <img src={snack} alt="" />
            <p>Snack</p>
          </div></NavLink>
          <NavLink to="/recipies"><div className='categori' onClick={() => handleCategoryClick('teatime')}>
            <img src={dessert} alt="" />
            <p>Dessert</p>
          </div></NavLink>
          <NavLink to="/recipies"><div className='categori' onClick={() => handleCategoryClick('salad')}>
            <img src={salad} alt="" />
            <p>Salad</p>
          </div></NavLink>
        </div>
      </div>
    );
}

export default Categories;
