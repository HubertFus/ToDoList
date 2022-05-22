import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import LoginFrom from "./LoginFrom";
import DataFetching from "./DataFetching";
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Navigate
} from "react-router-dom";
import Register from "./Register";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
