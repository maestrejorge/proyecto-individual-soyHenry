import React from "react";
import { Link } from "react-router-dom";
import {
  GeneralContainer,
  Containercard,
  Containerdescrip,
  Containerdiets,
  Containerhs,
} from "../Recipe/styles.js";

export default function Recipe({ foodid, tittle, image, diets, healthScore }) {
  return (
    <GeneralContainer>   
        <Containercard>
      <Link to={`/detalle/${foodid}`}>
          <span>
            <h1> {tittle} </h1>
          </span>
      </Link>
      <Link to={`/detalle/${foodid}`}>
          <img src={image} alt={tittle} />
      </Link>
        </Containercard>
      <Containerdescrip>
        <Containerdiets>
          <span>
            <h3> Diets : </h3>
          </span>
          <div>
            <ul>
              {diets.map((e, index) => {
                return (
                  <li key={index}>
                    <h4> {e} </h4>
                  </li>
                );
              })}
            </ul>
          </div>
        </Containerdiets>
        <Containerhs>
          <h4> Health Score : {healthScore}</h4>
        </Containerhs>
      </Containerdescrip>
    </GeneralContainer>
  );
}
