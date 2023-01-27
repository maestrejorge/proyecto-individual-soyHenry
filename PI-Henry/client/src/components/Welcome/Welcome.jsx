import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllrecipe, getbyDiets } from "../../redux/action/actions.js";
import { Container, Wrapper, Container2 } from "./styles.js";
import {Button} from '../generalStyles.js'
import { imgWelcome } from "../../img/img.js";
import { Link } from "react-router-dom";

export default function Welcome() {
  const recipes = useSelector((state) => state.recipes);
  let crecipes = recipes.length - 13;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllrecipe());
    dispatch(getbyDiets());
  }, [dispatch]);

  return (
    <Container>
      <Container2>
        <h1>Welcome to the Daily Recipe</h1>
        <h2>
          In this application you will be able to save and see more than{" "}
          {crecipes} Recipes... so that you can carry out your favorite diet
        </h2>
        <h4> Remember;</h4> <h3> "You are what you eat"</h3>
      </Container2>
      <Wrapper>
        <img src={imgWelcome} alt="imagen1" />
      </Wrapper>
      <Link to="/home">
        <Button
        // onClick={e =>   e.preventDefault(e)}
        > ...Click Here to Continue...</Button>
      </Link>
    </Container>
  );
}
