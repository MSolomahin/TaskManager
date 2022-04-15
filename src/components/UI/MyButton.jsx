import React from "react";
import styled from "styled-components";

const Mybtn = styled.button`
  margin: 5px;
  width: fit-content;
  appearance: none;
  border: 0;
  background: #ffedc3;
  border-radius: 10px;
  color: black;
  padding: 11px 16px;
  font-size: 16px;

  :hover {
    background: #f8d57e;
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
