import React from "react";

function IngredientCard({ ingredient, handleClick}) {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={ingredient.id}
        onClick={() => handleClick(ingredient)}
      >
            <div className="header">
            <h2>{ingredient.name}</h2>
          </div>
        <div className="image" >
          <img alt="image" src={ingredient.image} />
        </div>
        
        <div className="content">
        
          <div className="meta text-wrap">
            <small>Price: ${ingredient.cost}</small>
            <br></br>
            <small>Calories: {ingredient.calories}</small>
            <br></br>
            <small>Protein: {ingredient.protein}</small>
            <br></br>
            <small>Fat: {ingredient.fat}</small>
          </div>
        
        </div>
        <div className="extra content">
          <small>
            Vitamins: {ingredient.vitamins}
          </small>
          <br></br>
          <small>
          Minerals: {ingredient.minerals}
          </small>

     
        </div>
      </div>
    </div>
  );
}

export default IngredientCard;
