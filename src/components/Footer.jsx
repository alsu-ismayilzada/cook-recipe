import React from 'react';
import "../styles/Footer.css";
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='Footer'>
            <div className='left'>
                <h2>Food<span>Recipe</span></h2>
                <p><b>About us</b></p>
                <p>Cooksconnect aims to make cooking enjoyable<span className='ektratext'>, as we believe it contributes to a healthy lifestyle for individuals, communities, and the environment</span> . Our platform connects home cooks worldwide to share recipes and culinary ideas.</p>
            </div>
            <div className='right'>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/recipies">Recipies</NavLink></li>
                    <li><NavLink to="/create-recipe">Create new Recipe</NavLink></li>
                </ul>
                <div className='register'>
                    <NavLink to="/signup"><button>Signup</button></NavLink>
                    <NavLink to="/login"><button>Login</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Footer