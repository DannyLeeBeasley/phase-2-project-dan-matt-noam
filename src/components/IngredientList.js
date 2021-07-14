import React from "react";
import IngredientCard from "./IngredientCard"

function IngredientList({ingredients, handleClick}) {

  return (
 <div className="ingredients">
       <div className="ui segment ingredient-list">
            <div className="ui five column grid">
                <div className="row ingredient-list-row"></div>
                
                    
      
        <h1>Choose Your Ingredients</h1>
        {
          ingredients.map(ingredient => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} handleClick={handleClick}/>
          ))
        }           
        {/* <div id="shelf">
        <div class="top"></div>
        <div class="front"></div>
        <div class="shadow"></div>
      </div> */}

           </div>
        </div>
      </div>
   
    
  );
}

export default IngredientList;