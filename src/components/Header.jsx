import React from "react";
import styled from "styled-components";
import plus from "../assets/img/plus.png";
import MyButton from "./UI/MyButton";
import {useDispatch} from "react-redux";

const MyHeader = styled.header`
  height: 50px;
  width: 100%;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const MyHeaderContent = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MyHeaderBtn = styled(MyButton)`
  height: 35px;
  position: relative;
`;

const Header = (props) => {
    const dispatch = useDispatch();

    const setVisibleModal = (flag) => {
        dispatch({type: "VISIBLE_MODAL", payload: flag})
    }
  return (
    <MyHeader>
      <MyHeaderContent>
        <h3>Task Manager</h3>
        <MyHeaderBtn onClick={() => setVisibleModal(true)}>
          <img src={plus} width="10" height="10" alt="" />
        </MyHeaderBtn>
      </MyHeaderContent>
    </MyHeader>
  );
};

export default Header;
