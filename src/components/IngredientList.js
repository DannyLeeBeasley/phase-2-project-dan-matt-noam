import React, {useState} from "react";
import IngredientCard from "./IngredientCard"
import Filter from "./Filter"

function IngredientList({ingredients, handleClick}) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  let itemsToDisplay = ingredients.filter((ingredient) => {
    if (selectedCategory === "All") return true;

    return ingredient.category === selectedCategory;
  });

  return (
    <div>
   <h1>Choose Your Ingredients</h1>

    <Filter onCategoryChange={handleCategoryChange}/>

 <div className="ingredients">
       <div className="ui segment ingredient-list">
            <div className="ui five column grid">
                <div className="row ingredient-list-row"></div>
                
                    
      
        {
          itemsToDisplay.map(ingredient => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} handleClick={handleClick} category={ingredient.category}/>
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
      </div>
   
    
  );
}

export default IngredientList;