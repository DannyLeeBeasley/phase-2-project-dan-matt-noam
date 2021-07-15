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

  return (
    <div className="your-ingredients">

    <div className="ui segment inverted olive ingredient-list">
      <div className="ui five column grid">
        <div className="row ingredient-list-row">
          <h1>My Ingredients:</h1>
            
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
      </>}
      handleClose={togglePopup}
    />}
          
      
    </div>
  );
}

export default YourSmoothie;
