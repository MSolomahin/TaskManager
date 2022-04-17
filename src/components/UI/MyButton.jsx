import React from "react";
import styled from "styled-components";

const Mybtn = styled.button`
  width: fit-content;
  appearance: none;
  margin-right: 10px;
  border: 0;
  background: #ffedc3;
  border-radius: 10px;
  color: black;
  padding: 11px 16px;
  font-size: 16px;

  :hover {
    background: #ffefc6;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 4px #ffcb51bc;
  }
`;

const MyButton = (props) => {
  return <Mybtn {...props}>{props.children}</Mybtn>;
};

export default MyButton;
