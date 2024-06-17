import React from 'react';
import "../styles/ShareRecipe.css";
import shareImg from "../images/shareRecipe1.jpg";
import { NavLink } from 'react-router-dom';

const ShareRecipe = () => {
  return (
    <div className='shareRecipe'>
      <div className='left'>
        <img src={shareImg} />
      </div>
      <div className='rigth'>
        <div className='rigth-content'>
          <h2>Share Your <span>Recipies</span></h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem dolores, tenetur perspiciatis doloribus recusandae vero labore nobis repudiandae odit sit? </p>
          <NavLink to="/create-recipe"><button>Share new Recipe</button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default ShareRecipe