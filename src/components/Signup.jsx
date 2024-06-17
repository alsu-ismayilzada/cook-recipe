import React from 'react';
import "../styles/Signup.css";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!fullName) {
      newErrors.fullName = "Name is required";
    }else if (fullName.length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted");
      setFullName("");
      setEmail("");
      setPassword("");
    }
  }
  return (
    <div className='Signup'>
      <div className='common'>
        <h3>Sign up</h3><br />
        <input onChange={(e) => setFullName(e.target.value.trim())} value={fullName} type="text" placeholder='Name' />
        {errors.fullName && <span className='error'>{errors.fullName}</span>}
        <input onChange={(e) => setEmail(e.target.value.trim())} value={email}  type="email" placeholder='Email' />
        {errors.email && <span className='error'>{errors.email}</span>}
        <input onChange={(e) => setPassword(e.target.value.trim())} value={password}  type="text" placeholder='Password' />
        {errors.password && <span className='error'>{errors.password}</span>}
        <button className='create-account' onClick={handleSubmit}>Create an account</button>
        <p>or</p>
        <button className='google'>Sign up with Google</button>
        <p>Already have an account? <NavLink to="/login"><span className='loginP'>Log in</span></NavLink></p>
        <button className='goHome'><NavLink to="/">Go to Home</NavLink></button>
      </div>
    </div>
  )
}
export default Signup;