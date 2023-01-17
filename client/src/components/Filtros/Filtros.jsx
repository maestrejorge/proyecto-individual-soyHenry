import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filtrarbyDiets,
  getbyDiets,
  filterByOrigenData,
} from "../../redux/action/actions.js";
import { CheckBox, CheckBoxLabel } from "../generalStyles.js";
import {

  ContainerOrigenData,
  ContainerFilterDiets,
  GeneralContainer,
  ContainerDietsSelect,
  ContainerLi,
  UlDietSelect,
  UlDiet,
} from "./styles.js";

export default function Filtros() {
  const dispatch = useDispatch();
  const [infoFilter, setFilter] = useState({
    filterDiets: [],
  });

  const diets = useSelector((state) => state.diets);

  const handledata = (event) => {
    if (infoFilter.filterDiets.some((e) => event.target.value === e)) {
      infoFilter.filterDiets = infoFilter.filterDiets.filter(
        (e) => e !== event.target.value
      );
      setFilter({
        ...infoFilter,
        filterDiets: [...infoFilter.filterDiets],
      });
    } else {
      setFilter({
        ...infoFilter,
        filterDiets: [...infoFilter.filterDiets, event.target.value],
      });
    }
  };

  useEffect(() => {
    dispatch(getbyDiets());
    dispatch(filtrarbyDiets(infoFilter));
    dispatch(filterByOrigenData(infoFilter));
  }, [dispatch, infoFilter]);

  return (
    <GeneralContainer>
      <ContainerOrigenData>
       
          <form id="filtros1" onSubmit={(e) => e.preventDefault(e)}>
          <h4>Filter by Data Source </h4>
            
              <input
                defaultChecked
                type="radio"
                id="radio1"
                name="filtrarOrigen"
                value="all"
                onChange={(e) => {
                  e.preventDefault(e);
                  setFilter({
                    ...infoFilter,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <label htmlFor="radio1">All</label>
              <input
                type="radio"
                id="radio2"
                name="filtrarOrigen"
                value="api"
                onChange={(e) => {
                  e.preventDefault(e);
                  setFilter({
                    ...infoFilter,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <label htmlFor="radio2">Api</label>
              <input
                type="radio"
                id="radio3"
                name="filtrarOrigen"
                value="db"
                onChange={(e) => {
                  e.preventDefault(e);
                  setFilter({
                    ...infoFilter,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <label htmlFor="radio3">db</label>
           
          </form>
       
      </ContainerOrigenData>
      <ContainerFilterDiets>
          <form id="filtros2" onSubmit={(e) => e.preventDefault(e) }>
          <h4>Filter according to diets </h4>

       
              
                {infoFilter?.filterDiets?.length > 0
                  ? <UlDietSelect> {infoFilter.filterDiets?.map((e, index) => {
                      return <li key={index}>{e}</li>;
                    })}</UlDietSelect> : null}
              
          
           
              <UlDiet>
                {diets?.length > 0 ? (
                  diets.map((e, index) => {
                    return (
                      <ContainerLi key={index}>
                        
                          <CheckBox
                            type="checkbox"
                            id={index}
                            name="filterDiets"
                            value={e.name}
                            onChange={(e) => handledata(e)}
                          />
                          <CheckBoxLabel htmlFor={index} />
                          <span> {e.name}</span>
                        
                      </ContainerLi>
                    );
                  })
                ) : (
                  <div> cargando.... </div>
                )}
              </UlDiet>
            
            <ContainerDietsSelect>
            </ContainerDietsSelect>
            {/* <input
              htmlFor="filtros2"
              name="filterDiets"
              type="reset"
              // placeholder="Clear Filter Diets"
              value="Clear Filter Diets"
              onClick={(e) => {
                dispatch(
                  filtrarRecipe({
                    [e.target.name]:[],
                  })
                );
              }}
            /> */}
          </form>
        
      </ContainerFilterDiets>
    </GeneralContainer>
  );
}
