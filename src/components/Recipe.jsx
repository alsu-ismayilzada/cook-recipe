import React from 'react';
import "../styles/Recipe.css";
import likev1 from "../images/likev1.svg";

const Recipe = (props) => {
    return (
        <div className='Recipe'>
            <h1>{props.label}</h1>
            <img src={props.image} alt="" className='foodImage' />
            <div className='features'>
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    <ul>
                        
                        {props.ingredientLines.map((element, index) => (
                            <li key={index}>{element}</li>
                        ))}
                    </ul>
                </div>
                <div className="otherFeatures">
                    <h4>Calories</h4>
                    <p>{Math.round(props.calories)} KKAL</p>
                    <h4>Total Time</h4>
                    <p>{props.totalTime !== 0 ? props.totalTime >= 60 ? `${Math.floor(props.totalTime / 60)}h ${props.totalTime % 60}minutes` : `${props.totalTime}minutes` : null}</p>
                    <h4>Cuisine Type</h4>
                    <p>{props.cuisineType}</p>
                    <h4>Meal Type</h4>
                    <p>{props.mealType}</p>
                    <h4>Diet Labels</h4>
                    <p>{props.dietLabels}</p>
                </div>
            </div>
            <div className="bottom">
                <img className="likeImg" src={likev1} alt="" />
                <a href={props.url} target='_blank' className='visitBtn'><button>Visit Recipe</button></a>
            </div>
        </div>
    )
}

export default Recipe