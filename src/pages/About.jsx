import React from "react";
import GlobalStyles from "../styles/global";
import Header from "../components/Header";
import styled from "styled-components";
import WhiteBlock from "../components/WhiteBlock"

const List = styled.ul`
  list-style: none;
`

const About = () => {
  return (
    <>
      <GlobalStyles />
      <Header context={"О приложении"} />
      <div className="app">
        <WhiteBlock>
          <h3>Сайт подготовил</h3>
          <p>Соломахин Максим Сергеевич</p>
        </WhiteBlock>
        <WhiteBlock>
          <h3>Стек технологий</h3>
          <List>
            <li>React</li>
            <li>Redux</li>
            <li>StyledComponents</li>
            <li>JavaScript</li>
            <li>HTML, CSS</li>
            <li>Git</li>
          </List>
        </WhiteBlock>
      </div>
    </>
  );
};

export default About;
