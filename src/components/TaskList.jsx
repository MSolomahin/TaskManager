import React, {useState} from "react";
import TaskItem from "./TaskItem";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import {useDispatch, useSelector} from "react-redux";


const FlexList = styled.div`
  display: flex;
  flex-direction: column;
`;

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
};


const TaskList = ({tasks}) => {

    const listBlocks = useSelector(state => state.kindTasks.kind)
    //const tasks = useSelector(state => state.tasks.tasks)
    const RootClass =
        listBlocks === "blocks" ? styled(Masonry)`` : styled(FlexList)``;

    return (
        <div>
            <p style={{width: "100%"}}>
                Количество задач: {Object.keys(tasks).length}
            </p>

            <RootClass
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {tasks.map((task, index) => (
                    <TaskItem
                        task={task}
                        number={index + 1}

                        key={index}

                    />
                ))}
            </RootClass>
        </div>
    );
};

export default TaskList;
