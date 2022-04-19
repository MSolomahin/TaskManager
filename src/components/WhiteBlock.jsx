import React from "react";
import styled from "styled-components";

const SBlock = styled.div`
  background-color: white;
  padding: 25px;
  margin-bottom: 10px;
  width: fit-content;
  box-shadow: 0px 16px 31px rgba(0, 0, 0, 0.01);
  border-radius: 34px;
`;

const WhiteBlock = ({ children }) => {
  return <SBlock>{children}</SBlock>;
};

export default WhiteBlock;
