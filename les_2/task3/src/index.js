import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const rootElem = document.querySelector("#root");

//для динамической отрисовки создаём функцию

const renderSeconds = time => {

  const seconds = new Date(time).getSeconds();
  const backgroundColor = seconds % 2 === 0 ? "black" : "white";
  const textColor = seconds % 2 !== 0 ? "black" : "white";

  const styles = {
    color: textColor,
    backgroundColor
  }

  const element = (
    <div
      className="seconds"
      style={styles}
    >
      Now is {seconds}
    </div>
  );

  ReactDOM.render(element, rootElem);
}

renderSeconds(new Date());

setInterval(() => renderSeconds(new Date()), 1000);