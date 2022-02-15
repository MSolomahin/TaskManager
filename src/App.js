import "./App.css";
import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import About from "./pages/About";
import Tasks from "./pages/Tasks";
import Navbar from "./components/Navbar";
import {createStore} from "redux";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Tasks/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/tasks" element={<Tasks/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
