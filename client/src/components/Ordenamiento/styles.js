import styled from "styled-components";

export const GeneralContainer = styled.div`
  padding:auto;
  margin: auto;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto) ;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1rem;
  justify-self: stretch;
  h4{
    font-weight: bold;
    font-variant: small-caps;
    text-transform: capitalize;
    
  }
  label{
  text-transform: capitalize;
  }
`;
export const ContainerAlfa = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  form{
    display: flex;
    flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-start;
  }
`;
export const ContainerHealthScore = styled.div`
 margin:auto;
 display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  form{
    display: flex;
    flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-start;
  }

`;
