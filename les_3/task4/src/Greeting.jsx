import React from "react";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import "./index.scss";

const rootElem = document.querySelector("#root");

class Greeting extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="greeting">
        My name is `${firstName} ${lastName}`. I'm 17 years old
      </div>
    );
  }
}

export default Search

ReactDOM.render(<Greeting  />, rootElem);
