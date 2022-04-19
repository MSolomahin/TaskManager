import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GlobalStyles from "../styles/global";
import Header from "../components/Header";
import MyButton from "../components/UI/MyButton";
import { useFetching } from "../hooks/useFetching";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WhiteBlock from "../components/WhiteBlock";
import Comments from "../components/Comments";
import ucFirst from "../utils/function"
import Loader from "../utils/Loader";

const TaskIdPage = () => {
  const params = useParams();
  const [task, setTask] = useState({});
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const router = useNavigate();

  const [fetchTasks, isTaskLoading] = useFetching(async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/` + params.id
    );
    setTask(response.data);
  });

  const [fetchComments, isCommentsLoading] = useFetching(async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
    );
    setComments(response.data);
  });

  useEffect(() => {
    fetchTasks(params.id);
    fetchComments(params.id);
  }, []);

  function removeTask(task) {
    dispatch({
      type: "CHANGE_TASKS",
      payload: tasks.filter((t) => t.id !== task.id),
    });
    router(`/tasks`);
  }

  return (
    <>
      <GlobalStyles />
      <Header context={"Task " + params.id} />
      <div className="app">
        <WhiteBlock>
          {isTaskLoading ? <Loader/> : <h1>{ucFirst(task.title)}</h1>}
        </WhiteBlock>
        <WhiteBlock>
          <MyButton onClick={() => removeTask(task)}>Done</MyButton>
          <MyButton >In work</MyButton>
          <MyButton >Hold</MyButton>
          <MyButton >Add comment</MyButton>
        </WhiteBlock>
        <WhiteBlock>
          <h1>Комментарии</h1>
          {isCommentsLoading ? (
            <Loader />
          ) : (
            <Comments comments={comments} />
          )}
        </WhiteBlock>
      </div>
    </>
  );
};

export default TaskIdPage;
