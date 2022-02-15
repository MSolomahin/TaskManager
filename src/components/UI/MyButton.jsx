import React from "react";
import styled from "styled-components";

const Mybtn = styled.button`
  margin: 5px;
  width: fit-content;
  appearance: none;
  border: 0;
  border-radius: 5px;
  background: #4676d7;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;

  :hover {
    background: #1d49aa;
    
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
  }
`;

const MyButton = (props) => {
  return <Mybtn {...props}>{props.children}</Mybtn>;
};

export default MyButton;