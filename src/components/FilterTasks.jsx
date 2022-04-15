import React from "react";
import styled from "styled-components";
import find from "../assets/img/find.svg";

const FindInput = styled.input`
  width: 100%;
  border: 0px;
  border-radius: 10px;
  outline: none;
  height: 40px;
  margin-bottom: 10px;
  padding: 5px 15px;
  ::placeholder {
    color: #757575;
    opacity: 47%;
    font-size: 15px;
  }
  background-color: #efefef;
  background-image: url("../assets/img/find.svg");
  background-size: auto 90%;
  :hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  }
  :focus {
    background-color: #e8e8e8;
  }
`;

const FilterTasks = ({ setFind }) => {
  return (
    <FindInput
      placeholder="Search task..."
      type="text"
      onChange={(e) => {
        setFind(e.target.value);
      }}
    />
  );
};

export default FilterTasks;
