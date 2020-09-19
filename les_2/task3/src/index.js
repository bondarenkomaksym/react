import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const rootElem = document.querySelector("#root");

const element = (
  <div className="seconds">{new Date().toDateString()}</div>
);

ReactDOM.render(element, rootElem);