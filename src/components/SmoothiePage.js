import React, {useEffect, useState} from "react";
import YourSmoothie from "./YourSmoothie";
import IngredientList from "./IngredientList";

function SmoothiePage() {
  const [ingredients, setIngredients] = useState([])
  const [myIngredients, setMyIngredients] = useState([])

  const getIngredient = (ingredient) => {
    if(myIngredients.includes(ingredient)){
      alert('Already Using This Ingredient!')
    }else{
    const myIngredientList = [...myIngredients, ingredient]
    setMyIngredients(myIngredientList)
  }}

  const removeIngredient = (ingredient) => {
    const myIngredientList = [...myIngredients].filter((myIngredient) => myIngredient.id !== ingredient.id)
    setMyIngredients(myIngredientList)
  }

//   const deleteBot = (bot) => {
//     const newBotList = [...bots].filter((dbot) => dbot.id !== bot.id)
//     setBots(newBotList)
//   }

// const deleteBot = (bot) => {
//   const removeBot = {
//     method: 'DELETE'
//   };
//   fetch(`http://localhost:8002/bots/${bot.id}`, removeBot).then((response) => {
//     return response.json();
//   }).then(() => {
//   const newBotList = [...bots].filter((dbot) => dbot.id !== bot.id)
//   setBots(newBotList)
//   });
// }

  useEffect(() => {
    fetch("http://localhost:3000/ingredients")
      .then((resp) => resp.json())
      .then((data) => {
        setIngredients(data);
      });
}, []);



  return (
    <div>
      <YourSmoothie ingredients={myIngredients} handleClick={removeIngredient}/>
      <IngredientList ingredients={ingredients} handleClick={getIngredient} />
    </div>
  )
}

export default SmoothiePage;