import {
  GET_ALL_RECIPE,
  GET_ALL_DIETS,
  GET_RECIPE_DETALLE,
  RESET_RECIPE_DETALLE,
  CREAR_RECIPE,
  RESET_CREAR_RECIPE,
  BUSCAR_TITTLE,
  INFO_BOTONES,
  RECIPE_LOAD,
  INFO_FORM,
  INGREDIENT_LIST,
  FILTER_BY_ORIGENDATA,
  FILTRAR_BY_DIETS,
  ORDENAR_BY_ALFA,
  ORDER_BY_HEALTHSCORE,
  RESET_BUSCAR_TITTLE,
  PAGINAS,
  RESET_INFO_FORM
} from "../action/actions.js";

const initialState = {
  paginas:[],
  infoform: {},
  ingredientList: [],
  infobotones: {
    botonOrdenar: false,
    botonFiltrar: false,
  },
  recipedetalle: [],
  diets: [],
  crearecipe: [],
  buscartittle: {},
  recipes: [],
  recipesLoad: [],
};

const rootReducer = (state = initialState, action) => {
  // const aux = state.recipesLoad;
  // console.log(aux);

  switch (action.type) {
    case GET_ALL_RECIPE:
      return {
        ...state,
        recipes: action.payload,
      };
      case PAGINAS:
      return {
        ...state,
        paginas: action.payload,
      };
    case RECIPE_LOAD:
      return {
        ...state,
        recipesLoad: [...state.recipes],
      };
    case GET_ALL_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    case INGREDIENT_LIST:
      return {
        ...state,
        ingredientList: action.payload,
      };
    case CREAR_RECIPE:
      return {
        ...state,
        crearecipe: action.payload,
      };
    case RESET_CREAR_RECIPE:
      return {
        ...state,
        crearecipe: action.payload,
      };
    case GET_RECIPE_DETALLE:
      return {
        ...state,
        recipedetalle: action.payload,
      };
    case RESET_RECIPE_DETALLE:
      return {
        ...state,
        recipedetalle: action.payload,
      };
    case RESET_BUSCAR_TITTLE:
      return {
        ...state,
        recipesLoad: [...state.recipesLoad],
      };
    case BUSCAR_TITTLE:
      if(action.payload.recipe?.length > 0){

        state.recipesLoad = [...state.recipesLoad].filter(
          (e) =>
            e.tittle
              ?.toUpperCase()
              .indexOf(action.payload.recipe?.toUpperCase()) > -1
        );
      } else state.recipesLoad = [...state.recipes]
      return {
        ...state,
        recipesLoad: [...state.recipesLoad],
        buscartittle:{...state.buscartittle,...action.payload}
      };
    case FILTRAR_BY_DIETS:
      
      if(action.payload.filterDiets?.length >0){
        let a = [];
        let aux = [];
        
        action.payload.filterDiets.forEach((ebusqueda) => {
          a = [...state.recipes].filter((e) => {
            return e.diets.includes(ebusqueda);
          });
          aux = [...aux, ...a];
        });
        state.recipesLoad = [...new Set(aux)];
      }else state.recipesLoad = [...state.recipes]
      
      
      
      
      return {
        ...state,
        recipesLoad: [...state.recipesLoad],
      };

    case FILTER_BY_ORIGENDATA:
      switch (action.payload.filtrarOrigen) {
        case "api":
          state.recipesLoad = [...state.recipesLoad].filter(
            (e) => e.origendata === "api"
          );
          break;
        case "all":
          state.recipesLoad = [...state.recipes];
          break;
        case "db":
          state.recipesLoad = [...state.recipesLoad].filter(
            (e) => e.origendata === "user"
          );
          break;
        case "Clear Filter Origen Data":
          state.recipesLoad = [...state.recipes];
          break;
        default:
          break;
      }
      return {
        ...state,
        recipesLoad: [...state.recipesLoad],
      };
    case ORDENAR_BY_ALFA:
      
      switch (action.payload.ordenarAlfa) {
        case "A - Z":
          
          state.recipesLoad = [...state.recipesLoad].sort((a, b) =>
            a.tittle.localeCompare(b.tittle)
          );
          break;
        case "Z - A":
          state.recipesLoad =[...state.recipesLoad].sort((a, b) =>
            b.tittle.localeCompare(a.tittle)
          );
          break;
        case "Default Order":
          state.recipesLoad = [...state.recipes];
          break;
        default:
          break;
      }
      return {
        ...state,
        recipesLoad: state.recipesLoad,
      };
    case ORDER_BY_HEALTHSCORE:
      
      switch (action.payload.ordenarhealthScore) {
        
        case "mayorhealthScore":
          state.recipesLoad = [...state.recipesLoad].sort(
            (a, b) => b.healthScore - a.healthScore
          );
          break;
        case "menorhealthScore":
          state.recipesLoad = [...state.recipesLoad].sort(
            (a, b) => a.healthScore - b.healthScore
          );
          break;
        case "Default Order":
          state.recipesLoad =[...state.recipes];
          break;
        default:
          break;
      }
      return {
        ...state,
        recipesLoad: [...state.recipesLoad],
      };
    case INFO_BOTONES:
      return {
        ...state,
        infobotones: { ...state.infobotones, ...action.payload },
      };
    case INFO_FORM:
      return {
        ...state,
        infoform: { ...state.infoform, ...action.payload },
      };
      case RESET_INFO_FORM:
      return {
        ...state,
        infoform: {},
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
