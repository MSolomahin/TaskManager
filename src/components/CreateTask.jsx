import React from "react";
import styled from "styled-components";
import { useState } from "react";
import MyButton from "./UI/MyButton";
import MyInp from "./UI/MyInput";
import {useDispatch, useSelector} from "react-redux";

const CreateForm = styled.div`
 display: flex;
 flex-direction: column;
 gap: 10px;
`

const CreateTask = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState({title: '', body: ''})
    const tasks = useSelector(state => state.tasks.tasks)
    function createTask(newTask) {
        dispatch({type: "CHANGE_TASKS", payload:[...tasks, newTask]});
    }

function addNewTask (e) {
    e.preventDefault();
    const newTask = {
        ...task, id: Date.now()
    };
    createTask(newTask);
    setTask({title: '', body: ''})
}

  return (
    <CreateForm>
      <h3>Create your task</h3>
      <MyInp 
        style = {{height: "30px"}} 
        type="text" 
        placeholder="Title"
        value = {task.title}
        onChange = {(e) => setTask({...task, title: e.target.value})} />
      <MyInp 
        style = {{height: "30px"}} 
        type="text" 
        value = {task.body}
        placeholder="Body"
        onChange = {(e) => setTask({...task, body: e.target.value})} />
        <MyButton onClick = {(e) => {addNewTask(e)}}>Create task</MyButton>
    </CreateForm>
  );
};

export default CreateTask;
