
import "../styles/Introduction.css";
import { NavLink } from 'react-router-dom';
import img from '../images/foodPicture.jpg';
import img1 from '../images/food.jpg';
import img2 from '../images/food2.jpg';
import img3 from '../images/food4.jpg';
import menu from "../images/menu.svg";
import React, { useState, useEffect } from 'react';


const images = [img, img1, img2, img3];

const Introduction = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='introduction'>
      <nav className='navbar'>
        <div className='logo'>Food<span>Recipe</span></div>

        <ul className='menu'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/recipies">Recipes</NavLink></li>
          <li><NavLink to="/favorites">Favorites</NavLink></li>
          <li><NavLink to="/create-recipe">Create new Recipe</NavLink></li>
        </ul>

        <div className='butonandlogin'>
          <div className='buttons'>
            <NavLink to="/login"><div className='login'>Login</div></NavLink>
            <NavLink to="/signup"><div className='signup'>Sign up</div></NavLink>
          </div>
          <div className='menuIcon' onClick={toggleMenu}>
            <img src={menu} alt="" />
          </div>
        </div>
      </nav>
      <ul className='menu2' style={{ display: isMenuOpen ? 'flex' : 'none' }}>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/recipies"><li>Recipes</li></NavLink>
        <NavLink to="/favorites"><li>Favorites</li></NavLink>
        <NavLink to="/create-recipe"><li>Create new Recipe</li></NavLink>
      </ul>
      <div className='left-content'>
        <div className='left'>
          <h1>Don't know what to eat? Let's prepare together.</h1>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae perspiciatis in dolores qui sapiente doloremque natus cupiditate impedit debitis veniam?</h4>
          <NavLink to="/recipies"><button>Let's Go</button></NavLink>
        </div>
        <div className='rigth'>
          <img src={images[currentImageIndex]} className='orbiting-image' alt='food' />
        </div>
      </div>
    </div>
  )
}

export default Introduction