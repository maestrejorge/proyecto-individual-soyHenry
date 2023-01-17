import styled from "styled-components";

export const GeneralContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, auto);
grid-template-rows: auto;
grid-column-gap: 10px;
grid-row-gap: 1rem;
padding: 2rem;
border-radius: 109px;
background: linear-gradient(145deg, #f3ebda, #ccc6b8);
box-shadow:  9px 9px 18px #b1ac9f,
             -9px -9px 18px #fffff9;
`;

export const Containercard = styled.div`
  padding: auto;

  margin: 1%;
  h1 {
    justify-content: center;
    font-stretch: extra-expanded;
    font-size: large;
    text-shadow: 0px 0px 0 rgb(74 12 0), 
    0.5px 0px 0 #7e6b2f, 
    1px 0px 0 #040404, 
    1.5px 0px 1px #ffc107, 
    1.5px 0px 0.5px #c0ff00, 
    0px 0px 1px #ff4700;
  }
  img {
    border-radius: 8%;
    margin: 5%;
    height: auto;
    width: 150px;
    cursor: pointer;
  }
`;
export const Containerdescrip = styled.div`
  h3 {
    font-size: medium;
    font-weight: bold;
    font-style: italic;
  }
`;
export const Containerdiets = styled.div`
  ul {
    justify-content: start;
    list-style-type: none;
    font-weight: bold;
    font-variant: small-caps;
  }
`;
export const Containerhs = styled.div`
  font-size: medium;
  font-weight: bold;
  font-style: italic;
`;
