import styled from "styled-components";

export const GlobalContainer = styled.section``;
export const Header = styled.div``;

export const ContainerDetail = styled.div`
margin-top: 10%;
margin-bottom: 5%;

`;

export const ContainerFood = styled.div``;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div`
  align-content: center;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;

  img {
    display: flex;
    justify-content: center;
    height: 250px;
    width: auto;
    margin: 1vw;
    border-radius: 3%;
    background: linear-gradient(145deg, #f3ebda, #ccc6b8);
box-shadow:  9px 9px 18px #b1ac9f,
             -9px -9px 18px #fffff9;
  }
`;
export const ContainerListStep = styled.div``;


export const ListStep = styled.ol`
  align-items: start;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 0px;
  padding: auto;
  padding-left: 3rem;
  padding-right: 1.5rem;
  text-align: justify;
  h3{
    font-style: italic;
    font-weight:bold;
  }

  
  `;

export const ListIngredient = styled.ul`
  text-align: start;
  text-transform: capitalize;
  li{
    margin-left: 5rem;
    padding-left: .5rem;
  }
`;

export const ContainerSteps = styled.div`
  text-align: center ;
  
  h2{
    font-size: xx-large;
    font-weight: bold;
    text-decoration: underline;
    font-style: italic;
  }
  
  
`;
export const ContainerDescripcion = styled.div`
  margin: 0.8%;
  justify-content: center;
  align-items: center;
  h2 {
    text-align: center;
    text-decoration: underline;
    font-size: xx-large;
    font-weight: bold;
  }
  p {
    text-align: justify;
    padding: 1%;
  }
`;

export const TituloH3 = styled.h3`
  margin: 2%;
  font-size: x-large;
  padding: 1%;
  font-style: italic;
  font-weight: bold;
`;
export const TituloH2 = styled.h2`
  margin: 2%;
  padding: 1%;
  font-style: italic;
  font-weight: bold;
`;
export const TituloH1 = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 2% 1% 1%;
  padding: 2%;
  font-weight: bold;
  font-style: italic;
  text-decoration: underline;
  font-size: 30px;
  text-shadow: 0px 0px 0 rgb(74 12 0), 1px 0px 0 #7e6b2f, 2px 0px 0 #040404,
    3px 0px 2px #ffc107, 3px 0px 1px #c0ff00, 0px 0px 2px #ff4700;
`;


export const ContainerHealthScore = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 0px;
  h3{
    text-align: end;
  }
  h2{
text-align: start;
  }
`;