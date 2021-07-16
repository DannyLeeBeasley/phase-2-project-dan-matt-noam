import React, {useEffect, useState} from "react";
import YourSmoothie from "./YourSmoothie";
import IngredientList from "./IngredientList";
import About from "./About"
import NavBar from "./NavBar";
import Header from "./Header";
import { Route, Switch } from 'react-router-dom';

function SmoothiePage() {
  const [ingredients, setIngredients] = useState([])
  const [myIngredients, setMyIngredients] = useState([])

  // const selectAll = () => {
  //   setMyIngredients(ingredients)
  // }

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
      <Header />
      <Switch>
      <Route exact path="/yoursmoothie" component={
        () => <YourSmoothie ingredients={myIngredients} handleClick={removeIngredient}/>}/>
      <Route exact path="/ingredientlist" component={
        () => <IngredientList ingredients={ingredients} handleClick={getIngredient} myIngredients={myIngredients} setMyIngredients={setMyIngredients}/>}/>
     <Route exact path ="/about" component={
       () => <About/>}/>
       </Switch>
     </div> 
     
   
  )
}

export default SmoothiePage;