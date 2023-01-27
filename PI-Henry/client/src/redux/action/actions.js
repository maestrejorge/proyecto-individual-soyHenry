import axios from "axios";
export const GET_ALL_RECIPE = "GET_ALL_RECIPE";
export const GET_ALL_DIETS = "GET_ALL_DIETS";
export const GET_RECIPE_DETALLE = "GET_RECIPE_DETALLE";
export const RESET_RECIPE_DETALLE = "RESET_RECIPE_DETALLE";
export const CREAR_RECIPE = "CREAR_RECIPE";
export const RESET_CREAR_RECIPE = "RESET_CREAR_RECIPE";
export const FILTRAR_BY_DIETS = "FILTRAR_BY_DIETS";
export const ORDENAR_BY_ALFA = "ORDENAR_BY_ALFA";
export const BUSCAR_TITTLE = "BUSCAR_TITTLE";
export const INFO_BOTONES = "INFO_BOTONES";
export const RECIPE_LOAD = "RECIPE_LOAD";
export const INFO_FORM = "INFO_FORM";
export const INGREDIENT_LIST = "INGREDIENT_LIST";
export const FILTER_BY_ORIGENDATA = "FILTER_BY_ORIGENDATA";
export const ORDER_BY_HEALTHSCORE = "ORDER_BY_HEALTHSCORE";
export const RESET_BUSCAR_TITTLE = "RESET_BUSCAR_TITTLE";
export const PAGINAS = 'PAGINAS';
export const RESET_INFO_FORM="RESET_INFO_FORM"

export const getAllrecipe = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/recipes")
      .then((data) => data.json())
      .then((data) =>{
        dispatch({
          type: GET_ALL_RECIPE,
          payload: data,
        })}
      );
  };
};
export const paginas = (info) => {
  return function (dispatch) {
    return dispatch({
      type: PAGINAS,
      payload: info,
    });
  };
};
export const recipeLoad = (info) => {
  return function (dispatch) {
    return dispatch({
      type: RECIPE_LOAD,
      payload: info,
    });
  };
};
export const getIngredients = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/ingredients")
      .then((data) => data.json())
      .then((data) =>
        dispatch({
          type: INGREDIENT_LIST,
          payload: data,
        })
      );
  };
};
export const getbyDiets = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/diets")
      .then((data) => data.json())
      .then((data) =>
        dispatch({
          type: GET_ALL_DIETS,
          payload: data,
        })
      );
  };
};
export const getRecipedetalle = (id) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/recipes/${id}`)
      .then((data) => data.json())
      .then((data) =>
        dispatch({
          type: GET_RECIPE_DETALLE,
          payload: data,
        })
      );
  };
};
export const resetRecipedetalle = () => {
  return function (dispatch) {
    return dispatch({
      type: RESET_RECIPE_DETALLE,
      payload: [],
    });
  };
};
export const crearRecipe = (payload) => {
  return async function (dispatch) {
    try {
      const respuesta = await axios.post(
        "http://localhost:3001/recipes",
        payload
      );
      return dispatch({
        type: CREAR_RECIPE,
        payload: respuesta,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const resetCrearecipe = () => {
  return function (dispatch) {
    return dispatch({
      type: RESET_CREAR_RECIPE,
      payload: {},
    });
  };
};
export const filtrarbyDiets = (info) => {
  return function (dispatch) {
    return dispatch({
      type: FILTRAR_BY_DIETS,
      payload: info,
    });
  };
};
export const filterByOrigenData = (info) => {
  return function (dispatch) {
    return dispatch({
      type: FILTER_BY_ORIGENDATA,
      payload: info,
    });
  };
};
export const ordenarbyAlfa = (info) => {
  return function (dispatch) {
    return dispatch({
      type: ORDENAR_BY_ALFA,
      payload: info,
    });
  };
};
export const orderbyHealthScore = (info) => {
  return function (dispatch) {
    return dispatch({
      type: ORDER_BY_HEALTHSCORE,
      payload: info,
    });
  };
};
export const buscartittle = (info) => {
  return function (dispatch) {
    return dispatch({
      type: BUSCAR_TITTLE,
      payload: info,
    });
  };
};
export const resetBuscartittle = (info) => {
  return function (dispatch) {
    return dispatch({
      type: RESET_BUSCAR_TITTLE,
      payload: info,
    });
  };
};
export const handlebotones = (info) => {
  return function (dispatch) {
    return dispatch({
      type: INFO_BOTONES,
      payload: info,
    });
  };
};
export const handleform = (info) => {
  return function (dispatch) {
    return dispatch({
      type: INFO_FORM,
      payload: info,
    });
  };
};
export const resethandleform = (info) => {
  return function (dispatch) {
    return dispatch({
      type: RESET_INFO_FORM,
      payload: info,
    });
  };
};

