import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SNavbar = styled.div`
  height: 50px;
  width: 100vw;
  display: flex;
  align-items: center;
  background: white;
`;

const SNavbarLinks = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const SLink = styled(Link)`
  font-size: 15px;
  font-weight: 600;
  color: #8f8f8f;
  margin-right: 20px;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <SNavbar>
      <SNavbarLinks>
        <SLink to="/about">О приложении</SLink>
        <SLink to="/tasks">Задачи</SLink>
      </SNavbarLinks>
    </SNavbar>
  );
};

export default Navbar;
