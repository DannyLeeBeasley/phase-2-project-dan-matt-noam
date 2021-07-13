import React from "react";
import IngredientCard from "./IngredientCard"

function IngredientList({ingredients, handleClick}) {

  return (
    <div className="ingredients">
       <div className="ui segment inverted olive bot-army">
            <div className="ui five column grid">
                <div className="row bot-army-row"></div>
                    
      
        <h1>Choose Your Ingredients</h1>
        {
          ingredients.map(ingredient => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} handleClick={handleClick}/>
          ))
        }
           </div>
        </div>
      </div>
   
    
  );
}

export default IngredientList;