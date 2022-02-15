import React from "react";
import styled from "styled-components";

const FindInput = styled.input`
    width: 100%;
    border: 1px solid grey;
    border-radius: 10px;
    height: 30px;
    margin-bottom: 10px;;
    padding:5px;
    
    :hover {
    box-shadow: 0 0 5px rgba(122,122,122,0.5);;
   } 
`


const FilterTasks = ({ setFind }) => {
  return (
    <FindInput
      type="text"
      onChange={(e) => {
        setFind(e.target.value);
      }}
    />
  );
};

export default FilterTasks;
