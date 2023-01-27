import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllrecipe,
  getbyDiets,
 crearRecipe,
 resethandleform
} from "../../redux/action/actions";
import { Generalcontainer, Header } from "../Home/styles";
import RecipeDiets from "./forms/RecipeDiets";
import StepsIngredients from "./forms/StepsIngredients"
import Navbar from "../Navbar/Navbar.jsx"
import { FormsContainer } from "./styles";
import {InputButton} from "../generalStyles.js"
export default function CreaRecipe() {
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes);
  const recipereate = useSelector((state) => state.crearecipe);
  const inforegistros = useSelector((state) => state.infoform);
  let [c] = useState(0);
 
console.log(inforegistros)


 const creadoRecipe = () => {
   c = recipes[recipes.length - 1]

const info = {
  origendata:"user",
  foodid: c.foodid + 10,
  tittle: inforegistros.tittle,
  summary:inforegistros.summary,
  healthScore: inforegistros.healthScore,
  diets:inforegistros.diets,
  steps: inforegistros.steps
}
    console.log(info)
    dispatch(crearRecipe({...info}))
 }


  useEffect(() => {
    dispatch(getAllrecipe());
    dispatch(getbyDiets());
  }, [dispatch]);
 
  return (
    <Generalcontainer>
      <Header>
      <Navbar/>
      </Header>
      <FormsContainer>
        <h3>Add a new recipe to our database</h3>

  <RecipeDiets/>
  <StepsIngredients/>
      </FormsContainer>
  <InputButton
  type="button"
  value="Create Recipe"
  onSubmit={e => e.preventDefault(e)}
  onClick={e => {
    creadoRecipe();
    dispatch(resethandleform())
  }}
  disabled={inforegistros?.tittle?.length > 0 ? false:true}
   />
  
  <div>{recipereate?.data?.msj  } </div>
    </Generalcontainer>
  );
}
