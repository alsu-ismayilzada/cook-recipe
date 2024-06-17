import React, { useState } from 'react';
import "../styles/Recipies.css";
import Cooks from './Cooks';
import { useSelector, useDispatch } from 'react-redux';
import { addRecipies, clearRecipies } from '../redux/searchRecipiesSlice';

const Recipies = () => {
    const recipies = useSelector((state) => state.searchRecipies);
    const favoriteRecipies = useSelector((state) => state.favoriteRecipies);
    const [mouseOver, setMouseOver] = useState(false);
    const [dietType, setDietType] = useState('none');
    const [cuisineType, setCuisineType] = useState('');
    const [healthType, setHealthType] = useState('none');
    const [mealType, setMealType] = useState('breakfast');
    const [q, setQ] = useState('');
    const [dishType, setDishType] = useState('');

    const dispatch = useDispatch();

    const handleMouseOver = () => {
        if (!mouseOver) {
            setMouseOver(true);
        }
    };

    const changeDietType = (event) => {
        setDietType(event.target.value);
    };

    const changeCuisineType = (event) => {
        setCuisineType(event.target.value);
    };

    const changeHealthType = (event) => {
        setHealthType(event.target.value);
    };

    const changeMealType = (event) => {
        setMealType(event.target.value);
    };

    const changeDishType = (event) => {
        setDishType(event.target.value);
    };
    const changeQ = (event) => {
        setQ(event.target.value);
    };


    const handleSearch = () => {
        dispatch(clearRecipies());

        let url = `https://api.edamam.com/search?app_id=0f548bd3&app_key=2d54297ba513eef8b6e6c8221bd43aac`;

        if (mealType) url += `&mealType=${mealType}`;
        if (q) { url += `&q=${q}` } else url += `&q=${mealType}`;
        if (dietType !== 'none') url += `&diet=${dietType}`;
        if (healthType !== 'none') url += `&health=${healthType}`;
        if (cuisineType) url += `&cuisineType=${cuisineType}`;
        if (dishType) url += `&dishType=${dishType}`;

        const fetchData = (retryCount = 0) => {
            fetch(url)
                .then(res => {
                    if (res.status === 429) {
                        const retryAfter = res.headers.get('Retry-After') || 1; // Default to 1 second if not specified
                        if (retryCount < 5) { // Retry up to 5 times
                            setTimeout(() => fetchData(retryCount + 1), retryAfter * 1000);
                        } else {
                            console.error('Too many requests. Please try again later.');
                        }
                    } else if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error('Network response was not ok.');
                    }
                })
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

        fetchData();
    };


    return (
        <div className='Recipies'>
            <div className='commonContainer' onClick={handleMouseOver}>
                <div className='search'>
                    <input type="text" className='searchInp' onChange={changeQ} placeholder='Enter an ingredient' />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className='checkboxContainer' style={{ display: mouseOver ? 'flex' : 'none' }}>
                    <div className='categoriesCheckbox'>
                        <p>Diet Type</p>
                        <input type="radio" id="none" name="diet" value="none" onChange={changeDietType} />
                        <label htmlFor="none">None</label><br />
                        <input type="radio" id="balanced" name="diet" value="balanced" onChange={changeDietType} />
                        <label htmlFor="balanced">Balanced</label><br />
                        <input type="radio" id="high-protein" name="diet" value="high-protein" onChange={changeDietType} />
                        <label htmlFor="high-protein">High-Protein</label><br />
                        <input type="radio" id="low-carb" name="diet" value="low-carb" onChange={changeDietType} />
                        <label htmlFor="low-carb">Low-Carb</label><br />
                        <input type="radio" id="low-fat" name="diet" value="low-fat" onChange={changeDietType} />
                        <label htmlFor="low-fat">Low-Fat</label><br />
                        <input type="radio" id="low-sodium" name="diet" value="low-sodium" onChange={changeDietType} />
                        <label htmlFor="low-sodium">Low-Sodium</label><br />
                        <input type="radio" id="high-fiber" name="diet" value="high-fiber" onChange={changeDietType} />
                        <label htmlFor="high-fiber">High-Fiber</label><br />
                        <input type="radio" id="vegan" name="diet" value="vegan" onChange={changeDietType} />
                        <label htmlFor="vegan">Vegan</label><br />
                    </div>
                    <div className='containerHealthAndDishType'>
                        <div className='healthCheckboxdiv'>
                            <label htmlFor="healthCheckbox">Choose a health type</label><br />
                            <select id="healthCheckbox" onChange={changeHealthType}>
                                <option value="none">None</option>
                                <option value="alcohol-free">Alcohol-Free</option>
                                <option value="celery-free">Celery-Free</option>
                                <option value="crustacean-free">Crustacean-Free</option>
                                <option value="dairy-free">Dairy-Free</option>
                                <option value="egg-free">Egg-Free</option>
                                <option value="fish-free">Fish-Free</option>
                                <option value="gluten-free">Gluten-Free</option>
                                <option value="keto-friendly">Keto-Friendly</option>
                                <option value="kidney-friendly">Kidney-Friendly</option>
                                <option value="kosher">Kosher</option>
                                <option value="low-potassium">Low Potassium</option>
                                <option value="lupine-free">Lupine-Free</option>
                                <option value="mustard-free">Mustard-Free</option>
                                <option value="no-oil-added">No Oil Added</option>
                                <option value="low-sugar">Low Sugar</option>
                                <option value="paleo">Paleo</option>
                                <option value="peanut-free">Peanut-Free</option>
                                <option value="pecatarian">Pecatarian</option>
                                <option value="pork-free">Pork-Free</option>
                                <option value="red-meat-free">Red Meat-Free</option>
                                <option value="sesame-free">Sesame-Free</option>
                                <option value="shellfish-free">Shellfish-Free</option>
                                <option value="soy-free">Soy-Free</option>
                                <option value="sugar-conscious">Sugar-Conscious</option>
                                <option value="tree-nut-free">Tree Nut-Free</option>
                                <option value="vegan">Vegan</option>
                                <option value="vegetarian">Vegetarian</option>
                                <option value="wheat-free">Wheat-Free</option>
                            </select>
                        </div>
                        <div className='mealTypeCheckbox'>
                            <label htmlFor="mealTypeDropdown">Choose a meal type</label><br />
                            <select id="mealTypeDropdown" onChange={changeMealType}>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="snack">Snack</option>
                                <option value="teatime">Teatime</option>
                            </select>
                        </div>
                        <div className='dishTypeCheckboxd'>
                            <label htmlFor="dishTypeDropdown">Choose a dish type</label><br />
                            <select id="dishTypeDropdown" onChange={changeDishType}>
                                <option value="none">None</option>
                                <option value="alcohol-cocktail">Alcohol-cocktail</option>
                                <option value="biscuits-and-cookies">Biscuits and cookies</option>
                                <option value="bread">Bread</option>
                                <option value="cereals">Cereals</option>
                                <option value="condiments-and-sauces">Condiments and sauces</option>
                                <option value="drinks">Drinks</option>
                                <option value="desserts">Desserts</option>
                                <option value="main-course">Main course</option>
                                <option value="pancake">Pancake</option>
                                <option value="preps">Preps</option>
                                <option value="preserve">Preserve</option>
                                <option value="salad">Salad</option>
                                <option value="sandwiches">Sandwiches</option>
                                <option value="side-dish">Side dish</option>
                                <option value="soup">Soup</option>
                                <option value="starter">Starter</option>
                                <option value="sweets">Sweets</option>
                            </select>
                        </div>
                    </div>
                    <div className='cuisineCheckbox'>
                        <p>Cuisine Types</p>
                        <div className='left'>
                            <input type="radio" id="world" name="cuisine" value="world" onChange={changeCuisineType} />
                            <label htmlFor="world">World</label><br />
                            <input type="radio" id="american" name="cuisine" value="American" onChange={changeCuisineType} />
                            <label htmlFor="american">American</label><br />
                            <input type="radio" id="asian" name="cuisine" value="Asian" onChange={changeCuisineType} />
                            <label htmlFor="asian">Asian</label><br />
                            <input type="radio" id="british" name="cuisine" value="British" onChange={changeCuisineType} />
                            <label htmlFor="british">British</label><br />
                            <input type="radio" id="caribbean" name="cuisine" value="Caribbean" onChange={changeCuisineType} />
                            <label htmlFor="caribbean">Caribbean</label><br />
                            <input type="radio" id="chinese" name="cuisine" value="Chinese" onChange={changeCuisineType} />
                            <label htmlFor="chinese">Chinese</label><br />
                            <input type="radio" id="french" name="cuisine" value="French" onChange={changeCuisineType} />
                            <label htmlFor="french">French</label><br />
                            <input type="radio" id="indian" name="cuisine" value="Indian" onChange={changeCuisineType} />
                            <label htmlFor="indian">Indian</label><br />
                        </div>
                        <div className='right'>
                            <input type="radio" id="italian" name="cuisine" value="Italian" onChange={changeCuisineType} />
                            <label htmlFor="italian">Italian</label><br />
                            <input type="radio" id="japanese" name="cuisine" value="Japanese" onChange={changeCuisineType} />
                            <label htmlFor="japanese">Japanese</label><br />
                            <input type="radio" id="korean" name="cuisine" value="Korean" onChange={changeCuisineType} />
                            <label htmlFor="korean">Korean</label><br />
                            <input type="radio" id="mexican" name="cuisine" value="Mexican" onChange={changeCuisineType} />
                            <label htmlFor="mexican">Mexican</label><br />
                            <input type="radio" id="middle-eastern" name="cuisine" value="Middle Eastern" onChange={changeCuisineType} />
                            <label htmlFor="middle-eastern">Middle Eastern</label><br />
                            <input type="radio" id="nordic" name="cuisine" value="Nordic" onChange={changeCuisineType} />
                            <label htmlFor="nordic">Nordic</label><br />
                            <input type="radio" id="south-american" name="cuisine" value="South American" onChange={changeCuisineType} />
                            <label htmlFor="south-american">South American</label><br />
                            <input type="radio" id="south-east-asian" name="cuisine" value="South East Asian" onChange={changeCuisineType} />
                            <label htmlFor="south-east-asian">South East Asian</label><br />
                        </div>
                    </div>
                </div>
            </div>
            <div className='recipiesContainer'>
                {recipies.length > 0 ? recipies.map((recipe, index) => {
                    const isFavorite = favoriteRecipies.some(favRecipe => favRecipe.label === recipe.label);
                    return (
                        <Cooks
                            key={index}
                            image={recipe.image}
                            isFavorite={isFavorite}
                            label={recipe.label}
                            calories={recipe.calories}
                            totalTime={recipe.totalTime}
                            cuisineType={recipe.cuisineType}
                            mealType={recipe.mealType}
                            dietLabels={recipe.dietLabels}
                            ingredientLines={recipe.ingredientLines}
                            url={recipe.url}
                        />
                    );
                }) : <h3>There a no recipies.</h3>}
                {/* {recipies.map((recipe, index) => (
                    <Cooks
                        key={index}
                        image={recipe.image}
                        label={recipe.label}
                        calories={recipe.calories}
                        totalTime={recipe.totalTime}
                        cuisineType={recipe.cuisineType}
                        mealType={recipe.mealType}
                        dietLabels={recipe.dietLabels}
                        ingredientLines={recipe.ingredientLines}
                        url={recipe.url}
                    />
                ))} */}
            </div>
        </div>
    );
};

export default Recipies;