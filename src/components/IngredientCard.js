import React from "react";

function IngredientCard({ ingredient, handleClick}) {

  const vitamins = ingredient.vitamins + ' '
  const minerals = ingredient.minerals + ' '
  
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={ingredient.id}
        // style={{backgroundImage: ingredient.image}}
        onClick={() => handleClick(ingredient)}
      >
            <div className="header">
            <h2>{ingredient.name}</h2>
          </div>
        <div className="pic" >
          <img alt="pic" src={ingredient.image} />
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
            Vitamins: {vitamins}
          </small>
          <br></br>
          <small>
          Minerals: {minerals}
          </small>

     
        </div>

        
        
      </div>
    </div>
  );
}

export default IngredientCard;
