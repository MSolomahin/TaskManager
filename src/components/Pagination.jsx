import React, {useContext} from "react";
import MyButton from "./UI/MyButton";
import styled from "styled-components";
import Context from "../context";

const SPagination = styled.div`
  margin: 20px 0;
`;
const Pagination = ({ pagesArray }) => {
  const { changeTask } = useContext(Context);
  return (
    <SPagination>
      {pagesArray.map((p, index) => {
        return (
          <MyButton key={index} onClick={() => changeTask(p)}>
            {p}
          </MyButton>
        );
      })}
    </SPagination>
  );
};

export default Pagination;
