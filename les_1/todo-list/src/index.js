import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.querySelector('#root');

const element = (
  <h1 className="title">Todo List</h1>
);

ReactDOM.render(element, rootElement);