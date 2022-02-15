import React from "react";
import styled from "styled-components";

const MySelector = styled.select`
  margin: 5px;
  width: 250px;
  border: 1px solid grey;
  border-radius: 5px;
  background: white;
  color: black;
  appearance: none;
  padding: 0 16px;
  height: 35px;
  font-size: 16px;
`

const MySelect = ({ sort, setSort, option }) => {

  return (
    
    <MySelector style = {{margin: "5px"}} value={sort} onChange={(e) => setSort(e.target.value)}>
      <option disabled value="">
        Сортировка
      </option>
      {option.map((o) => {
        return (
          <option key={o.value} value={o.value}>
            {o.name}
          </option>
        );
      })}

    </MySelector>
  );
};

export default MySelect;
