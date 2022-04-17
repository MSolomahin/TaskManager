import GlodalStyles from "./styles/global";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Tasks from "./pages/Tasks";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import TaskIdPage from "./pages/TaskIdPage";

function App() {
  return (
    <Provider store={store}>
      <GlodalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" element={<TaskIdPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
