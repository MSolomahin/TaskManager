import "../App.css";
import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList"
import GlobalStyles from "../styles/global";
import CreateTask from "../components/CreateTask";
import Header from "../components/Header";
import MyModal from "../components/MyModal";
import { useTasks } from "../hooks/UseTasks";
import ControlPanel from "../components/ControlPanel";
import axios from "axios";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import { getPageArray } from "../utils/pages";
import MyButton from "../components/UI/MyButton";
import {useDispatch, useSelector} from "react-redux";

function Tasks() {

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks)

  const [find, setFind] = useState("");
  const [sort, setSort] = useState("");
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const SearchAndFilterTasks = useTasks(sort, find, tasks);
  let pagesArray = getPageArray(totalPages);

  const [fetchTasks, isTaskLoading, taskError] = useFetching(async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: limit,
        _page: page
    }});
    dispatch({type: "CHANGE_TASKS", payload: response.data})
    const totalCount = (response.headers["x-total-count"]);
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchTasks()
  }, [page])

  const changeTask = (page) => {
    setPage(page);
  }

  return (
    <div>
      <GlobalStyles />
      <Header/>
      <div className="app">
        <MyModal>
          <CreateTask />
        </MyModal>
        <ControlPanel
          setFind={setFind}
          sort={sort}

          setSort={setSort}
          option={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
        {taskError && <h1>{taskError}</h1>}
        {isTaskLoading ? <h1>Идет загрузка...</h1> :
        <TaskList
          tasks={SearchAndFilterTasks}
        />}

        <hr style={{ margin: "20px 0", color: "black" }} />

        {pagesArray.map((p,index) => {
          return (<MyButton key = {index}
          onClick = {() => changeTask(p)}>{p}</MyButton>)
        })}

        <hr style={{ margin: "20px 0", color: "black" }} />
      </div>
    </div>
  );
}

export default Tasks;
