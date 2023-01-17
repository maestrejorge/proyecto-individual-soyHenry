import styled from "styled-components";


 
export const NavBar = styled.ul`
background-color: var(--fondo);
  border-bottom: solid #fff159;
  border-style: double;
  height: 150px;
  align-content: space-around;
  justify-content: space-between;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 10rem;
  list-style-type: none;
  font-variant: small-caps;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  li {
    font-size: x-large;
    padding: 2%;
    border-radius: 45%;
  }

  li a {
    display: block;
    color: #726253;
    text-align: center;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 100px;
    border: none;
  }
  li:hover {
    background-color: #fff159;
    font-weight: bold;
    font-style: italic;
  }
`;
