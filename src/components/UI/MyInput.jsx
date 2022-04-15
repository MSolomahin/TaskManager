import React from "react";
import styled from "styled-components";

const MyInp = styled.input`
  padding: 3px 10px;
  min-width: 500px;
  border-radius: 10px;
  background-color: #efefef;
  border: none;
  background-image: url('../../assets/img/find.svg');

`;

const MyInput = (props) => {
  return <MyInp {...props} />;
};

export default MyInput;
