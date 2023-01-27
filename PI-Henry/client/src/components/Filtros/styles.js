import styled from 'styled-components';


export const ContainerLi = styled.div`
position:relative;
`;
export const UlDietSelect = styled.ul`
padding: 0.5rem;
margin-top: 1rem;
margin-bottom: 2rem;
list-style-type: none;
font-weight: bold;
font-style: italic;
text-transform: capitalize;
border-radius:10px;
background: linear-gradient(145deg, #f3ebda, #ccc6b8);
box-shadow:  9px 9px 18px #b1ac9f,
             -9px -9px 18px #fffff9;
`;
export const UlDiet = styled.ul`
align-items: stretch;
text-transform: capitalize; 
list-style-type: none;
width: 100%;
li{
text-align: justify;
}

`;
export const ContainerDietsSelect = styled.div`

`;

export const GeneralContainer= styled.div`
margin: auto;
height: max-content;
width: max-content;
display: grid;
grid-template-columns: repeat(2, auto);
grid-template-rows: repeat(2, auto);
grid-column-gap: 1rem;
grid-row-gap: 0;
align-self: stretch;
align-content: center;


h4{
    font-weight: bold;
    font-variant: small-caps;
    text-transform: capitalize;
    text-align: start;
    padding: auto;
    
}
`;
export const ContainerOrigenData = styled.div`
form{
    display: flex;
    flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-start;
}
label{
  font-variant: small-caps;
  text-transform: capitalize;
  font-weight: bold;
}
`;
export const ContainerFilterDiets = styled.div`
form{
    display: flex;
    flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-start;
}

`;

