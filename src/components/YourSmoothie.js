import React, {useState} from "react";
import IngredientCard from "./IngredientCard";
import Popup from './Popup';

function YourSmoothie({ingredients, handleClick}) {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  let audio = new Audio("./Images/blender.mp3")

  const start = () => {
    audio.play()
  }

  var totalPrice = ingredients.reduce(function(prev, cur) {
    return prev + cur.cost;
  }, 0);

  var totalCalories = ingredients.reduce(function(prev, cur) {
    return prev + cur.calories;
  }, 0);

  var totalProtein = ingredients.reduce(function(prev, cur) {
    return prev + cur.protein;
  }, 0);

  var totalFat = ingredients.reduce(function(prev, cur) {
    return prev + cur.fat;
  }, 0);
  
  var totalNames = ingredients.reduce(function(prev, cur) {
    return prev + cur.name + '. ';
  }, []);

  // var totalVitamins = ingredients.reduce(function(prev, cur) {
  //   return prev + cur.vitamins + ' ';
  // }, []);

  // var totalMinerals = ingredients.reduce(function(prev, cur) {
  //   return prev + cur.minerals + ' ';
  // }, []);

  

  return (
    <div className="your-ingredients">

    <div className="ui segment ingredient-list">
      <div className="ui five column grid">
        <div className="row ingredient-list-row">

          {ingredients.length !== 0 ?
          <div className="yours"><h1>My Smooth(e):</h1></div>
          : <div><h1>Pick What You Want from the 'Ingredients' Tab</h1></div>
          }
          {
            ingredients.map(ingredient => (
              <IngredientCard key={ingredient.id} ingredient={ingredient} handleClick={handleClick}/>
            ))
          }    
      <div>
      </div>
      </div>
      </div>
      </div>

        {ingredients.length !== 0 ?
        <div>
    <input
      type="button"
      value="Make My Smoothie!"
      className="make-smoothie"
      style={{textAlign: "center"}}
      onFocus={start}
      onClick={togglePopup}
    />
    {isOpen && <Popup
      content={<>
        <img className="making-smoothie" src="./Images/smoothie.gif" alt="smoothie"/>
        <h4>Your Smooth(e):</h4>
        <h2>Ingredients: {totalNames}</h2>
        <h2>Price: ${totalPrice}</h2>
        <h2>{totalCalories} Calories</h2>
        <h2>{totalProtein}g of Protein</h2>
        <h2>{totalFat}g of Fat</h2>
        {/* <h2>Vitamins: {totalVitamins}</h2>
        <h2>Minerals: {totalMinerals}</h2> */}

      </>}
      handleClose={togglePopup}
    />} 
    </div>
    : null}
          
      
    </div>

  );

}

export default YourSmoothie;
