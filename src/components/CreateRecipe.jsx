import React from 'react';
import { useState } from 'react';
import "../styles/CreateRecipe.css";
import { NavLink } from 'react-router-dom';

const CreateRecipe = () => {
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const [photoUrl, setPhotoUrl] = useState(null);

    const handleAddIngredient = () => {
        const inp = document.querySelector('.ingredients input');
        if( inp.value.trim() != ""){
        setIngredients([...ingredients, inp.value]);
        inp.value = "";
        }
    };
    const handleAddStep = () => {
        const txt = document.querySelector('.steps textarea');
        if( txt.value.trim() != ""){
        setSteps([...steps, txt.value]);
        txt.value = "";
        }
    };

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setPhotoUrl(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className='CreateRecipe'>
             
            <div className='common'>
    
                <div className="title">
                <h3>Food Title</h3>
                    <input type="text" placeholder='Enter the name of your recipe... ' />
                </div>
                <div className="photo">
                <h3>Food Photo</h3>
                    <input type="file" onChange={handlePhotoUpload} accept="image/*" className='cooseFile' />
                    {photoUrl && <img src={photoUrl} alt="Uploaded" />}
                </div>
                <div className="description">
                <h3>Food Description</h3>
                    <textarea rows="5" cols="50" placeholder='Enter your text here...'></textarea>
                </div>
                <div className="totalTime">
                <h3>Total time</h3>
                    <input type="number" placeholder='Enter the total time in minutes...' />
                </div>
                <div className="cuisineType">
                <h3>Cuisine type</h3>
                    <select name="cuisine">
                        <option value="world">World</option>
                        <option value="American">American</option>
                        <option value="Asian">Asian</option>
                        <option value="British">British</option>
                        <option value="Caribbean">Caribbean</option>
                        <option value="Chinese">Chinese</option>
                        <option value="French">French</option>
                        <option value="Indian">Indian</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Korean">Korean</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Middle Eastern">Middle Eastern</option>
                        <option value="Nordic">Nordic</option>
                        <option value="South American">South American</option>
                        <option value="South East Asian">South East Asian</option>
                    </select>

                </div>
                <div className="mealType">
                    <h3>Meal type</h3>
                    <select id="mealTypeDropdown">
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch/dinner">Lunch/Dinner</option>
                        <option value="snack">Snack</option>
                        <option value="teatime">Teatime</option>
                    </select>
                </div>
                <div className="ingredients">
                <h3>Ingredients</h3>
                    <input type="text" placeholder='Enter an ingredient' />
                    <button onClick={handleAddIngredient}>Add ingredient</button>
                    <ul>
                        {ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className="steps">
                <h3>Steps</h3>
                    <textarea rows="3" cols="50" placeholder='Enter your text here...'></textarea>
                    <button  onClick={handleAddStep}>Add step</button>
                    <ol>
                        {steps.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
            <div className="buttons">
            <button>Save</button>
            <NavLink to="/"><button>Go to Home</button></NavLink>
            </div>
           
        </div>
    )
}

export default CreateRecipe