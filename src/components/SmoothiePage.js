import React, {useEffect, useState} from "react";
import YourSmoothie from "./YourSmoothie";
import IngredientList from "./IngredientList";
import About from "./About"
import NavBar from "./NavBar";

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

  useEffect(() => {
    fetch("http://localhost:3000/ingredients")
      .then((resp) => resp.json())
      .then((data) => {
        setIngredients(data);
      });
}, []);



  return (
    <div>
      <NavBar />
      <YourSmoothie ingredients={myIngredients} handleClick={removeIngredient}/>
      <IngredientList ingredients={ingredients} handleClick={getIngredient} />
      <About />
    </div>
  )
}

export default SmoothiePage;