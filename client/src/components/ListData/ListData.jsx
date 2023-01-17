import React, { useEffect } from "react";
import { ContainerList, ContainerRecipes } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getAllrecipe, recipeLoad } from "../../redux/action/actions.js";
import Recipe from "../Recipe/Recipe.jsx";
import { Link } from "react-router-dom";

export default function ListData() {
  const dispatch = useDispatch();

  const paginatodos = useSelector(state => state.paginas)
  const buscador = useSelector(state => state.buscartittle)
  

  useEffect(() => {
    dispatch(getAllrecipe());
   dispatch(recipeLoad());
  }, [dispatch]);
  return (
    <ContainerList>
      <ContainerRecipes >
      {
      (buscador?.recipe?.length >0 && paginatodos <= 0) ?(<div>
        Recipe Not Fount,  <Link to = "/createrecipe"> please Create a new Recipe  </Link> 
      </div>):
      (paginatodos?.map((i) => {
        return (
            <Recipe key={i.foodid.toString()}
              foodid={i.foodid}
              tittle={i.tittle}
              image={i.image}
              diets={i.diets}
              healthScore={i.healthScore}
            />
            );
          })
          )
          
          }
          </ContainerRecipes>
    </ContainerList>
  );
}
