import React, { useState, useEffect } from "react";
import { Container, SearchBar } from "../Buscar/styles.js";
import { useDispatch } from "react-redux";
import { buscartittle } from "../../redux/action/actions.js";

export default function Buscador() {
  const [buscar, setrecipe] = useState({});
  const dispatch = useDispatch();

  function capturarlainfo(event) {
    setrecipe({
      [event.target.name]: event.target.value,
    });
  }
  useEffect(() => {
    if(buscar.recipe?.length > 0){
      dispatch(buscartittle(buscar));
    }
    
  }, [
    dispatch, 
    buscar
  ]);
  // console.log(buscar)
// console.log(buscar)
  return (
    <Container>
      <form onSubmit={(e) => e.preventDefault(e)}>
        <SearchBar
          type="text"
          id="buscar"
          placeholder="What Do You Want to Eat?"
          name="recipe"
          autoComplete="on"
          onChange={(e) =>{
            // dispatch(buscartittle({[e.target.name]:e.target.value}))
            capturarlainfo(e)
          }
          }
        />
      </form>
    </Container>
  );
}
