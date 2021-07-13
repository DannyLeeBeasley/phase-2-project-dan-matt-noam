import React from "react";
import IngredientCard from "./IngredientCard";

function YourSmoothie({ingredients, handleClick}) {
  //your bot army code here...

  return (
    <div className="your-ingredients">
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
            
        <h1>Make a Smoothie!</h1>
          {
            ingredients.map(ingredient => (
              <IngredientCard key={ingredient.id} ingredient={ingredient} handleClick={handleClick}/>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourSmoothie;
