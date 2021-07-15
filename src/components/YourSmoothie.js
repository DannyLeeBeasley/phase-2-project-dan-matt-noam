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

  

  return (
    <div className="your-ingredients">

    <div className="ui segment ingredient-list">
      <div className="ui five column grid">
        <div className="row ingredient-list-row">

          <div className="yours"><h1>My Smooth(e):</h1></div>
            
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
        <img className="making-smoothie" src="./Images/smoothie.gif" loop={false}/>
        <h4>Your Smooth(e):</h4>
        <h2>Price: ${totalPrice}</h2>
        <h2>Calories: {totalCalories} Calories</h2>
        <h2>Protein: {totalProtein}g of Protein</h2>
        <h2>Fat: {totalFat}g of Fat</h2>

      </>}
      handleClose={togglePopup}
    />}
          
      
    </div>

  );

}

export default YourSmoothie;
