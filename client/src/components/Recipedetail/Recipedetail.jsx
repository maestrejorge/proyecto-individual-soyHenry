import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getRecipedetalle,
  resetRecipedetalle,
} from "../../redux/action/actions.js";
import Navbar from "../Navbar/Navbar.jsx";
import {
  ContainerDescripcion,
  ContainerDetail,
  ContainerFood,
  ContainerSteps,
  GlobalContainer,
  Header,
  ImgContainer,
  ListIngredient,
  ListStep,
  ContainerFooter,
  TituloH3,
  TituloH1,
  TituloH2,
  ContainerHealthScore,
} from "./styles.js";
import { Button, DivError } from "../generalStyles.js";

export default function Recipedetail(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getRecipedetalle(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const handleClick = () => {
    history.push("/home");
  };
  const recipedetalle = useSelector((state) => state.recipedetalle);
  return (
    <GlobalContainer>
      <Header>
        <Navbar />
      </Header>
      <ContainerDetail>
        {recipedetalle && recipedetalle.length > 0 ? (
          recipedetalle.map((e, index) => {
            return (
              <div key={e.foodid}>
                <ContainerFood>
                  <ImgContainer>
                    <TituloH1> {e.tittle} </TituloH1>
                    <img src={e.image} alt={e.tittle} />
                  </ImgContainer>
                  <ContainerDescripcion>
                    <TituloH2> Summary </TituloH2>
                    <p dangerouslySetInnerHTML={{ __html: e.summary }} />
                    <ContainerHealthScore>
                      <div>
                        <TituloH3>Health Score: </TituloH3>
                      </div>
                      <div>
                        <TituloH2> {e.healthScore} </TituloH2>
                      </div>
                    </ContainerHealthScore>
                  </ContainerDescripcion>
                </ContainerFood>

                <ContainerSteps>
                  {e.steps && e.steps.length > 0 ? (
                   
                    <TituloH2> Steps </TituloH2>
                  ) : (
                    <DivError>
                      <TituloH2> Steps not Define</TituloH2>
                    </DivError>
                  )}

                  <ListStep>
                    {e.steps && e.steps.length !== 0
                      ? e.steps?.map((element, index) => {
                          return (
                            <div>
                              <li key={index}> {element.step} </li>
                              {element.ingredients.length > 0 ? (
                                <h3> Ingredients For Step:</h3>
                              ) : null}
                              <ListIngredient>
                                {element.ingredients.map((i, index) => {
                                  return <div><li key={index}>{i.name}</li></div> ;
                                })}
                              </ListIngredient>
                            </div>
                          );
                        })
                      : null}
                  </ListStep>
                </ContainerSteps>

                <ContainerFooter>
                  <Button
                    onClick={(e) => {
                      dispatch(resetRecipedetalle());
                      handleClick();
                    }}
                  >
                    Go back and Continue Enjoying
                  </Button>
                </ContainerFooter>
              </div>
            );
          })
        ) : (
          <div>Cargando</div>
        )}
      </ContainerDetail>
    </GlobalContainer>
  );
}
