import React from "react";
import FilterTasks from "./FilterTasks";
import {useDispatch} from "react-redux";
import KindList from "./KindList";
import MyButton from "./UI/MyButton";
import MySelect from "./UI/MySelect";
import styled from "styled-components";
import plus from "../assets/img/plus.png";


const ControlUp = styled.div`
  height: 40px;
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const MyHeaderBtn = styled(MyButton)`
  height: 40px;
  position: relative;
  align-items: start;
  display: flex;
  gap : 5px;
  margin-left: auto;
`;

const ControlPanel = ({ setFind, sort, setSort, option }) => {
  const dispatch = useDispatch();

  const setVisibleModal = (flag) => {
    dispatch({ type: "VISIBLE_MODAL", payload: flag });
  };
  return (
    <div>
      <ControlUp>
        <KindList />
        <MySelect sort={sort} setSort={setSort} option={option} />
        <MyHeaderBtn onClick={() => setVisibleModal(true)}>
          Add task
          <img src={plus} width="20" height="20" alt="" />
        </MyHeaderBtn>
      </ControlUp>
      <FilterTasks setFind={setFind} />
    </div>
  );
};

export default ControlPanel;
