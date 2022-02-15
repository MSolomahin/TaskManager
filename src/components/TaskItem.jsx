import React from "react";
import styled from "styled-components";
import MyButton from "./UI/MyButton";
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";

const Item = styled.div`
  display: flex;
  align-items: ${(props) =>
    props.listBlocks === "blocks" ? "start" : "center"};
  justify-content: space-between;
  flex-direction: ${(props) =>
    props.listBlocks === "blocks" ? "column" : "row"};
  border: 1px solid grey;
  margin-top: 10px;
  border-radius: 20px;
  padding: 20px;
  background-color: white;
  gap: 10px;
`;

const TitleItem = styled.h3`
  margin-bottom: 20px;
`;

const TaskItem = (props) => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks)
  const listBlocks = useSelector(state => state.kindTasks.kind)

    function removeTask(task) {
        dispatch({type: "CHANGE_TASKS", payload: tasks.filter((t) => t.id !== task.id)});
    }

  return (
    <Item listBlocks={listBlocks}>
      <div style={{marginBottom: "12px"}}>
        <TitleItem>
          {props.task.id}. {props.task.title}
        </TitleItem>
        <p>{props.task.body}</p>
      </div>
      <div style={{display: "flex"}}>

        <MyButton onClick={() => router.push(`/tasks/${props.task.id}`)}>Open</MyButton>
        <MyButton onClick={() => removeTask(props.task)}>Done</MyButton>
      </div>
    </Item>
  );
};

export default TaskItem;
