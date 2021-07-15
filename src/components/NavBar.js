import React from "react";
// import YourSmoothie from "./YourSmoothie";
// import IngredientList from "./IngredientList";
// import About from "./About";

import { Link } from 'react-router-dom';


function NavBar() {
   
  return (
    <nav>
      <Link to="/yoursmoothie">Your Smoothie</Link>
      <Link to="/ingredientlist">Your Ingredients </Link>
      <Link to="/about">About </Link>
    </nav>
  );
}

export default NavBar;