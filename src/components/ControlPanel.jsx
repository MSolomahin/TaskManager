import React from "react";
import FilterTasks from "./FilterTasks";
import KindList from "./KindList";
import MySelect from "./UI/MySelect";
import styled from "styled-components";

const ControlUp = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const ControlPanel = ({ setFind, sort, setSort, option }) => {
  return (
    <div>
      <ControlUp>
        <KindList/>
        <MySelect sort={sort} setSort={setSort} option={option} />
      </ControlUp>
      <hr style={{ margin: "20px 0", color: "black" }} />
      <FilterTasks setFind={setFind} />
    </div>
  );
};

export default ControlPanel;
