import React from "react";
// import YourSmoothie from "./YourSmoothie";
// import IngredientList from "./IngredientList";
// import About from "./About";

function NavBar() {
    function navigate(e) {
        // don't make a GET request
        e.preventDefault();
        // use pushState to navigate using the href attribute of the <a> tag
        window.history.pushState(null, "", e.target.href);
      }
  return (
    <nav>
      <a href="/YourSmoothie" onClick={navigate}>Your Smoothie</a>
      <a href="/IngredientList" onClick={navigate}>Ingredients</a>
      <a href="/About" onClick={navigate}>About</a>

    </nav>
  );
}

export default NavBar