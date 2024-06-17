import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Recipies from './Recipies';
import Recipe from './Recipe';
import CreateRecipe from './CreateRecipe';
import Favorites from './Favorites';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipies" element={<Recipies />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path='/create-recipe' element={<CreateRecipe/>}/>
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
