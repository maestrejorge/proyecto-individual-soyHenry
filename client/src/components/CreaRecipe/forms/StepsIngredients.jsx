import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIngredients, handleform } from "../../../redux/action/actions.js";
import {
  ContainerStepingredients,
  InfoStep,
  FormStep1,
  FormStep2,
} from "../styles.js";
import { InputButton, InputText } from "../../generalStyles.js";
// import { Generalcontainer } from "../Home/styles";

export default function StepsIngredients() {
  const dispatch = useDispatch();
  const ingredientList = useSelector((state) => state.ingredientList);
  const [inforegistros, setinforegistros] = useState({ steps: [] });
  const [errores, seterrores] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const formredux = useSelector(state=> state.infoform)

  const validarinfo = (info) => {
    let errores = {};
    if (!info.step) {
      errores.step = "Is Empty, Enter Information";
    } else if (info.step.length <= 0) {
      errores.step = "Is Empty, Enter Information";
    }
    if (!info.ingredients) {
      errores.ingredients = "Is Empty, Enter Information";
    } else if (info.ingredients.length <= 0) {
      errores.ingredients = "Is Empty, Enter Information";
    }
    return errores;
  };
  const agregarIngredient = () => {
    if (inforegistros && inforegistros.ingredients !== "") {
      setIngredients([...ingredients, { name: inforegistros.ingredients }]);
      setinforegistros({ ...inforegistros, ingredients: "" });
    }
  };

  const agregarSteps = () => {
    if (inforegistros.step !== "" && ingredients.length !== 0) {
      setinforegistros({
        ...inforegistros,
        step: "",
        steps: [
          ...inforegistros.steps,
          { step: inforegistros.step, ingredients: ingredients },
        ],
      });
      setIngredients([]);
    }
  };

  const manejadordeinfo = (event) => {
    setinforegistros({
      ...inforegistros,
      [event.target.name]: event.target.value,
    });
    seterrores(
      validarinfo({
        ...inforegistros,
        [event.target.name]: event.target.value,
      })
    );
  };

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(handleform(inforegistros));
  }, [dispatch, inforegistros]);
  // console.log(inforegistros);


  return (
    <ContainerStepingredients>
      <FormStep1 id="fromstep" onSubmit={(e) => e.preventDefault(e)}>
        <label htmlFor="step">Steps of Recipe</label>
        <InputText
          id="step"
          onChange={(e) => manejadordeinfo(e)}
          type="text"
          name="step"
          placeholder="Step"
        />

        {errores && errores.step ? <span> {errores.step} </span> : null}

        <InputButton
          onSubmit={(e) => {
            e.preventDefault(e);
          }}
          onClick={(e) => {
            agregarSteps();
          }}
          type="reset"
          value="Add Step to Recipe"
          name="agregarotro"
          disabled={(errores && Object.keys(errores).length === 0 && formredux?.tittle?.length >0) ? false : true}
        />
      </FormStep1>
      <FormStep2 id="formingred" onSubmit={(e) => e.preventDefault(e)}>
        <label htmlFor="ingred"> Add Ingredients for Step</label>
        <InputText
          id="ingred"
          list="ingredients"
          onChange={(e) => manejadordeinfo(e)}
          type="text"
          name="ingredients"
          placeholder="Ingredient"
        />
        {errores && errores.ingredients ? (
          <span> {errores.ingredients} </span>
        ) : null}
        <ul>
          {ingredients && ingredients.length > 0
            ? ingredients.map((i, index) => {
                return <li key={index}>{i.name}</li>;
              })
            : null}
        </ul>
        <InputButton
          type="reset"
          htmlFor="ingred"
          value="Add Ingredient"
          onClick={(e) => agregarIngredient()}
          disabled={errores && Object.keys(errores).length === 0 ? false : true}
        />

        <datalist id="ingredients">
          {ingredientList && ingredientList.length > 0
            ? ingredientList.map((i, index) => {
                return <option key={index} value={i.name} />;
              })
            : null}
        </datalist>
      </FormStep2>
      <InfoStep></InfoStep>
    </ContainerStepingredients>
  );
}
