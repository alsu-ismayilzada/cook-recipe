import React from 'react';
import "../styles/Login.css";
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className='Login'>
      <div className='common'>
        <h3>Login</h3><br />
        <input type="email" placeholder='Email' />
        <button className='create-account'>Login</button>
        <p>or</p>
        <button className='google'>Sign up with Google</button>
        <p>Don't have an account? <NavLink to="/signup"><span className='loginP'>Create account</span></NavLink></p>
        <button className='goHome'><NavLink to="/" >Go to Home</NavLink></button>
      </div>
    </div>
  )
}

export default Login