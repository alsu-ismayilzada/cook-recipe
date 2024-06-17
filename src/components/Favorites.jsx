import React from 'react';
import "../styles/Favorites.css";
import { useSelector } from 'react-redux';
import Cooks from './Cooks';

const Favorites = () => {
  const recipies = useSelector((state) => state.favoriteRecipies);

  return (
    <div className='Favorites'>
      <h1>Your Favorites Recipies</h1>
      <div className='favoriteRecipies'>

        {recipies.length > 0 ? recipies.map((recipe, index) => (
          <Cooks key={index} index={index} {...recipe} isFavorite={true} />
        )) : <h3>There are no recipe in favorites.</h3>}
      </div>
    </div>
  );
};

export default Favorites;
