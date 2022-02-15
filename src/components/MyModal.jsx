import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

const SModalContent = styled.div`
  padding: 25px;
  background: white;
  border-radius: 16px;
  min-width: 250px;
  width: fit-content;
  border: 2px solid grey;
`;

const SModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.visible ? "flex" : "none")};
`;

const MyModal = ({ children}) => {
    const dispatch = useDispatch();
    const visible = useSelector(state => state.modal.flag);

    const setUnvisibleModal = (flag) => {
        dispatch({type: "VISIBLE_MODAL", payload: flag})
    }
  return (
    <SModal visible={visible} onClick={() => setUnvisibleModal(false)}>
      <SModalContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </SModalContent>
    </SModal>
  );
};

export default MyModal;
