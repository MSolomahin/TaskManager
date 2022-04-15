import React from "react";
import styled from "styled-components";

const MySelector = styled.select`
  margin: 5px;
  width: 250px;
  border: 0px;
  border-radius: 10px;
  background-color: #efefef;
  color: black;
  appearance: none;
  padding: 0px 16px;
  height: 40px;
  font-size: 16px;
  outline: none;
`;

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
