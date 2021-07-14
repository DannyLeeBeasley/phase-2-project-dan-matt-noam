import React, {useState} from "react";
import IngredientCard from "./IngredientCard";
import Popup from './Popup';

function YourSmoothie({ingredients, handleClick}) {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

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
      <div>
    <input
      type="button"
      value="Make My Smoothie!"
      style={{position: "center"}}
      onClick={togglePopup}
    />
    {isOpen && <Popup
      content={<>
        <img className="making-smoothie" src="https://i.pinimg.com/originals/69/07/89/6907897ea5a182a980f9eb9d818ecd56.gif" loop={false}/>
      </>}
      handleClose={togglePopup}
    />}
  </div>
    </div>
  );
}

export default YourSmoothie;
