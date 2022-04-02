import React from 'react';
import MyButton from './UI/MyButton';

const Pagination = ({pagesArray, changeTask}) => {
    return (
        <div>
            <hr style={{ margin: "20px 0", color: "black" }} />

                {pagesArray.map((p,index) => {
                return (<MyButton key = {index}
                onClick = {() => changeTask(p)}>{p}</MyButton>)
                })}

            <hr style={{ margin: "20px 0", color: "black" }} />
        </div>
    );
};

export default Pagination;