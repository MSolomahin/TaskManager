import React from "react";
import { useState, useEffect } from "react";
import GlobalStyles from "../styles/global";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <GlobalStyles />
      <Header context = {"Dashboard"}/>
      <div className="app">
        <h1>Все работает</h1>
      </div>
    </div>
  );
};

export default About;
