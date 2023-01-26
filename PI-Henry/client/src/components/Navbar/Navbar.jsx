import React from "react";
import { logonav } from "../../img/img.js";
import { ContainerNavbar, NavBar } from "./styles.js";
import Buscador from "../Buscar/Buscador.jsx";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (

  
    <NavBar>
      <li key={"imagen"}>
        <Link to="/">
          <img src={logonav} alt="logo1" />
        </Link>
      </li>
      <li key={"home"}>
        <Link to="/home"> Recipe List</Link>
      </li>
      <li key={"buscar"}>
        <Buscador />
      </li>
      <li key={"crear"}>
        <Link to="/createrecipe"> Create a New Recipe</Link>
      </li>
    </NavBar>
  
    
    
  );
}
