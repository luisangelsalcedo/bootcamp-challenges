import React from "react";
import ReactDOM from "react-dom";
import { AppToDo } from "./components/AppToDo";
import "./index.scss";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <React.StrictMode>
    <AppToDo />
  </React.StrictMode>,
  document.getElementById("root")
);
