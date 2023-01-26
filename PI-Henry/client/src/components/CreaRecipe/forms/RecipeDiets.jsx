import React, { 
  useState, 
  // useEffect 
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleform } from "../../../redux/action/actions.js";
import {
  InputText,
  InputTextarea,
  CheckBox,
  CheckBoxLabel,
  InputButton,
} from "../../generalStyles.js";
import {
  ContainerDietul,
  ContainerForm1,
  ContainerRecipeDietAdd,
  ContainerRecipediets,
  DietsUl,
  FormRecipeDiets,
} from "../styles.js";
export default function RecipeDiets() {
  const dispatch = useDispatch();
  const diet = useSelector((state) => state.diets);
  const formredux = useSelector((state) => state.infoform);
  const [inforegistros, setinforegistros] = useState({
    diets: [],
  });

  const [errores, seterrores] = useState({});

  const validarinfo = (info) => {
    let errores = {};

    if (!info.tittle) errores.tittle = "Is Empty, Enter Information";

    if (!info.summary) errores.summary = "Is Empty, Enter Information";

    if (!info.healthScore) errores.healthScore = "Is Empty, Enter Information";
    else if (!/^\d+$/.test(info.healthScore)) {
      errores.healthScore = "El Atributo no es un numero positivo";
    } else if (!/\b([0-9]|[1-9][0-9]|100)\b/.test(info.healthScore)) {
      errores.healthScore = "El Atributo no es un numero entre 1 y 100";
    }

    return errores;
  };

  const dietsCheckbox = (event) => {
    if (inforegistros.diets.some((e) => e === event.target.value)) {
      inforegistros.diets = inforegistros.diets.filter(
        (e) => e !== event.target.value
      );
      setinforegistros({ ...inforegistros, diets: [...inforegistros.diets] });
    } else {
      setinforegistros({
        ...inforegistros,
        diets: [...inforegistros.diets, event.target.value],
      });
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

  // useEffect(() => {}, []);

  // console.log
  //   (formredux?.tittle?.length > 0 &&
  //     formredux?.summary?.length  > 0 &&
  //     formredux?.diets?.length  > 0 &&
  //     formredux?.healthScore?.length  > 0
  //       ? true
  //       : false
  // );
  // console.log(inforegistros)
  return (

    <div>
{
(formredux.tittle?.length > 0 &&
formredux.summary?.length  > 0 &&
formredux.diets?.length  > 0 &&
formredux.healthScore?.length  > 0)
  ? 
  
  <ContainerRecipeDietAdd>
    <h2>Tittle : {formredux?.tittle}</h2>
    <p> Summary :{formredux?.summary}</p>
    <h2>Diets :</h2>
    <ol>
{formredux.diets?.map((e,index)=> <li key={index}>{e}</li>)}
    </ol>
    <h2> Health Score: {formredux?.healthScore}</h2>
    <InputButton 
     type="button"
     value="Clear and Add again: Tittle, Summary,..."
     htmlFor="RecipeDiets"
     onClick={(e) =>
       dispatch(
        handleform({tittle:"",
         summary:"",
          diets:"",
          healthScore:""})
       )
     }
    />
    <h2>Steps to Recipe:</h2>
    <ol>
      {
      (formredux?.steps?.length > 0)? ( formredux?.steps?.map((e)=>{
     console.log(e.ingredients)
     return(
      <div key={e.step.toString()}>
      <li > {e.step}
        <ul>
          <h3>Ingredients to Step</h3>
          {(e.ingredients?.length > 0) ? e.ingredients?.map((data, index)=> <li key={index} >{data.name}</li>):null}
        </ul>
      </li>
      <InputButton 
      type="button"
      value="Clear and Add again: Steps and Ingredients"
      htmlFor="RecipeDiets"
      onClick={(e) =>
        dispatch(
         handleform({steps:[]})
        )
      }
      />

      </div>
      )}
      )
      ): null}

    </ol>

  </ContainerRecipeDietAdd>
  
  
  : (<ContainerForm1>
  <FormRecipeDiets
    id="RecipeDiets"
    method="POST"
  >
    <h4
    >Titulo de la receta</h4>
    <InputText
      onChange={(e) => manejadordeinfo(e)}
      type="text"
      name="tittle"
      placeholder="Tittle"
      // hidden={true}
    />
    {errores && errores.tittle ? <h5> {errores.tittle} </h5> : null}
    <h4>Imagen</h4>
    
     <input 
     onChange={e => manejadordeinfo(e)} 
     type= 'file'
     name = 'image'
      />
   
    <h4>Summary of Recipe</h4>
    <InputTextarea
      onChange={(e) => manejadordeinfo(e)}
      type="text"
      name="summary"
      placeholder="Summary"
     
    />
    {errores && errores.summary ? <h5> {errores.summary} </h5> : null}
    
    <h4>Health Score</h4>

    <InputText
      onChange={(e) => manejadordeinfo(e)}
      type="text"
      name="healthScore"
      placeholder="Health Score"
     
    />
    {errores && errores.healthScore ? (
      <h5> {errores.healthScore} </h5>
    ) : null}
    <ContainerRecipediets>
      <h4
      
      >Diets </h4>

      <DietsUl
     
      >
        {diet?.map((t, index) => (
          <li key={index}>
            <h4>{t.name}</h4>
            <ContainerDietul>
              <CheckBox
                type="checkbox"
                id={t.name}
                name="diet"
                value={t.name}
                onChange={(e) => dietsCheckbox(e)}
              />
              <CheckBoxLabel htmlFor={t.name} />
            </ContainerDietul>
          </li>
        ))}
      </DietsUl>
    </ContainerRecipediets>

    <InputButton
      type="reset"
      value="Add to Recipe: Diets, Summary and Tittle Values"
      htmlFor="RecipeDiets"
      onClick={(e) =>
        {dispatch(
          handleform({
            tittle: inforegistros.tittle,
            summary: inforegistros.summary,
            diets: inforegistros.diets,
            healthScore: inforegistros.healthScore,
          })
        );
      setinforegistros({
        diets: []
      })
      }
      }
      disabled={errores && Object.keys(errores).length === 0 ? false : true}
    />
  </FormRecipeDiets>
</ContainerForm1>)
}
    
    </div>
  );
}
