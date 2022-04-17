import React from "react";
import styled from "styled-components";

const MyHeader = styled.header`
  height: 50px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(163, 171, 185, 0.26);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const MyHeaderContent = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = ({ context }) => {
  return (
    <MyHeader>
      <MyHeaderContent>
        <h3>{context}</h3>
      </MyHeaderContent>
    </MyHeader>
  );
};

export default Header;
