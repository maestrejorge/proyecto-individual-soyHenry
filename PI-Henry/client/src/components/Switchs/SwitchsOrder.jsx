import React from "react";
import { ContainerOrder, GeneralContainer } from "./styles.js";
import { CheckBox, CheckBoxLabel } from "../generalStyles.js";
import { useState, useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import { handlebotones } from "../../redux/action/actions";
import Ordenamiento from "../../components/Ordenamiento/Ordenamiento.jsx"

export default function SwitchsOrder() {
  const dispatch = useDispatch();
  const infobotones = useSelector((state) => state.infobotones);
const [switchOrder, setInfobotones] = useState({});

const switchBottonordenar = (event) => {
  infobotones.botonOrdenar === false
  ? setInfobotones({ ...switchOrder, botonOrdenar: true })
  : setInfobotones({ ...switchOrder, botonOrdenar: false });
};
useEffect(() => {
  dispatch(handlebotones(switchOrder));
}, [dispatch, switchOrder]);

  return (

    <GeneralContainer>
    <h2>Order</h2>
    <ContainerOrder>
        <CheckBox
          id="botonOrdenar"
          type="checkbox"
          name="botonOrdenar"
          value={true}
          onChange={(e) => switchBottonordenar(e)}
        />
     <CheckBoxLabel htmlFor="botonOrdenar"/>  
    </ContainerOrder>
    {infobotones.botonOrdenar === true ? <Ordenamiento /> : null}
    </GeneralContainer>
  );
}
