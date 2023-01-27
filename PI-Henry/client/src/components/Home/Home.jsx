import React, { useEffect, useCallback, useState } from "react";
import {
  Generalcontainer,
  Header,
  Sildebar,
  Section,
  ContainerRecipes,
  ContainerPaginado,
} from "./styles";
import Navbar from "../Navbar/Navbar.jsx";
import SwitchsOrder from "../Switchs/SwitchsOrder";
import SwitchsFilter from "../Switchs/SwitchsFilter";
import ListData from "../ListData/ListData";
import { getAllrecipe, paginas } from "../../redux/action/actions.js";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "../Paginado/Paginado";

export default function Home() {
  const recipes = useSelector((state) => state.recipesLoad);
  const [current, setCurrent] = useState(1);

  const dispatch = useDispatch();
  const cambiodepagina = useCallback(
    (evento, pagina) => {
      evento.preventDefault();
      setCurrent(pagina);
    },
    [setCurrent]
  );
  let CANTIDADRECIPES = recipes.length;
  let LIMITE = 9;
  const paginatodos = recipes.slice(
    (current - 1) * LIMITE,
    (current - 1) * LIMITE + LIMITE
  );

  useEffect(() => {
    dispatch(getAllrecipe());
    dispatch(paginas(paginatodos));
  }, [dispatch, paginatodos]);

  return (
    <Generalcontainer>
      <Header>
      <Navbar />
      {
        paginatodos?.length > 0 ? ( <ContainerPaginado>
        <Paginado
          total={CANTIDADRECIPES}
          paginalimite={LIMITE}
          paginasdelado={2}
          cambiodepagina={cambiodepagina}
          current={current}
        />
      </ContainerPaginado>): null
      }
     
      </Header>
      
      <Section>
        <Sildebar>
          <SwitchsOrder />
          <SwitchsFilter />
        </Sildebar>
        <ContainerRecipes>
          <ListData />
        </ContainerRecipes>
      </Section>
    </Generalcontainer>
  );
}
