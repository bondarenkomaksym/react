import React from "react";
//чтобы не экспортировать библиотеку, можно добавить перед компонентой "React"
// import React, { Component } from 'react';


class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "" };
  }
  setColor = (value) => {
    this.setState({
      color: value,
    });
  };

  reset = () => {
    this.setState({
      color: "",
    });
  };

  render() {
    return (
      <div>
        <div class="picker__title">
          {this.state.color}
        </div>
        <div>
          <button class="picker__button picker__button_coral" onMouseEnter={() => this.setColor("Coral")} onMouseLeave={this.reset}></button>
          <button class="picker__button picker__button_aqua" onMouseEnter={() => this.setColor("Aqua")} onMouseLeave={this.reset}></button>
          <button class="picker__button picker__button_bisque" onMouseEnter={() => this.setColor("Bisque")} onMouseLeave={this.reset}></button>
        </div>
      </div>
    );
  }
}


export default ColorPicker;


