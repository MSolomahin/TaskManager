import React from 'react';
import MyButton from './UI/MyButton';
import {useDispatch} from "react-redux";

const KindList = () => {

    const dispatch = useDispatch();

    const changeListOrBlock = (value) => {
        dispatch({type: "CHANGE_LIST_OR_BLOCK", payload: value})
    }

    return (
        <div>
        <MyButton value = {"list"} onClick={() => changeListOrBlock("list")}>List</MyButton>
        <MyButton value = {"blocks"} onClick={() => changeListOrBlock("blocks")}>Blocks</MyButton>
      </div>
    );
};

export default KindList;