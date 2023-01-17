import React from "react";
import { ContainerFilter, GeneralContainer } from "./styles.js";
import { CheckBox, CheckBoxLabel } from "../generalStyles.js";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlebotones } from "../../redux/action/actions";
import Filtros from "../Filtros/Filtros.jsx"

export default function SwitchsFilter() {
  const dispatch = useDispatch();
  const infobotones = useSelector((state) => state.infobotones);

  let [switchFilter, setInfobotones] = useState({});
  
  const switchBottonfiltrar = (event) => {
    infobotones.botonFiltrar === false
    ? setInfobotones({ ...switchFilter, botonFiltrar: true })
    : setInfobotones({ ...switchFilter, botonFiltrar: false });
  };
  useEffect(() => {
    dispatch(handlebotones(switchFilter));
  }, [dispatch, switchFilter]);

  return (
        <GeneralContainer>
        <h2>Filter</h2>
    <ContainerFilter>
        <CheckBox
          id="botonfiltrar"
          type="checkbox"
          name="botonFiltrar"
          value={true}
          onChange={(e) => switchBottonfiltrar(e)}
        />
      <CheckBoxLabel htmlFor="botonfiltrar"/>
    </ContainerFilter>
    {infobotones.botonFiltrar === true ? <Filtros /> : null}
        </GeneralContainer>
  );
}
