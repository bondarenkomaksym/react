import React from "react";
//чтобы не экспортировать библиотеку, можно добавить перед компонентой "React"
// import React, { Component } from 'react';


class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { position: false };
  }

  setText = () => {
    this.setState((state) => ({
      position: !state.position,
    }));
  }
  render() {
    return (
      <button className="toggler" onClick={this.setText}>{this.state.position ? 'On' : 'Off'}</button>
    );
  }
}


export default Toggler;


