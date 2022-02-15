import React from "react";
import styled from "styled-components";

const MyInp = styled.input`
    padding: 3px 10px;
    min-width: 500px;
    border-radius: 3px;
    border: 1px solid blue;
`;

const MyInput = (props) => {
  return <MyInp {...props} />;
};

export default MyInput;
