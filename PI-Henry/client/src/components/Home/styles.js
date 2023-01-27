import styled from "styled-components";

export const Generalcontainer = styled.div``;
export const ContainerPaginado = styled.div`
border-bottom: solid ;
border-style: inset;
margin-top: 150px;
position: fixed;
background-color: var(--fondo);
display: flex;
justify-content: center;
width: 100%;
z-index: 2;
ul{
    display: flex;
    list-style-type: none;
    gap:5rem;
}`;

export const Header = styled.header`
width: auto;
height: 187px;
`;

export const Section = styled.div`
overflow: auto;
display: grid;
grid-template-columns: repeat(2, auto);
grid-template-rows: repeat(2, auto);;
grid-column-gap: 10px;
grid-row-gap: 1rem;
padding: auto;
justify-self: stretch;


`;
export const ContainerRecipes = styled.div`

padding:0.5rem;
`;
export const Sildebar = styled.div`
   height: max-content;
    width: max-content;
   margin-top: 1rem;
   list-style-type: none;
    padding: 0.5rem;
    height: max-content;
    width: max-content;
    border-radius: 50px;
background: linear-gradient(145deg, #f3ebda, #ccc6b8);
box-shadow:  9px 9px 18px #b1ac9f,
             -9px -9px 18px #fffff9;
h4{
    font-weight: bold;
    font-variant: small-caps;
    text-transform: capitalize;
    text-align: justify;
}
    `;
