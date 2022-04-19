import React from "react";
import styled from "styled-components";
import MyButton from "../components/UI/MyButton";

const SComment = styled.div`
  margin-bottom: 20px;
`;

const SEmail = styled.div`
  margin-bottom: 10px;
`;

const SText = styled.div`
  margin-bottom: 10px;
`;

const SComments = styled.div`
  margin: 20px 0;
`;

const Comments = ({ comments }) => {
  return (
    <SComments>
      {comments.map((content) => (
        <SComment>
          <SEmail>
            <h4>{content.email}</h4>
          </SEmail>
          <SText>{content.body}</SText>
          <MyButton>Reply</MyButton>
        </SComment>
      ))}
    </SComments>
  );
};

export default Comments;
