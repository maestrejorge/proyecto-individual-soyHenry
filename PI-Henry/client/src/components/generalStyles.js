import styled from "styled-components";

export const DivError = styled.div`
display: flex;
justify-content: center;
text-align: center;
`;

export const Div = styled.div``;

export const InputText = styled.input`
  width: 50%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`
export const InputTextarea = styled.textarea`
width: auto;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`

export const Button = styled.button`
  background-color: #cbb69b;
  border-radius: 28px;
  border: 1px solid #fff159;
  display: inline-block;
  cursor: pointer;
  color: #726253;
  font-size: 17px;
  font-variant: small-caps;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;

  :hover {
    background-color: #e1b80d;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;

export const InputButton = styled.input`
 background-color: #cbb69b;
  border-radius: 28px;
  border: 1px solid #fff159;
  display: inline-block;
  cursor: pointer;
  color: #726253;
  font-size: 17px;
  font-variant: small-caps;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;

  :hover {
    background-color: #e1b80d;
  }
  :active {
    position: relative;
    top: 1px;
  }
`

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 0;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.3s;
    }
  }
`;