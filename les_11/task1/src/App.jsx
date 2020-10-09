import React from "react";
import Numbers from "./Numbers";
import EvenNumbers from "./EvenNumbers";
import OddNumbers from "./OddNumbers";

class App extends React.Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      })
    }, 1000)
  }

  //интервал записываем через свойства класса, чтобы потом передать его в clearInterval
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="page">
        <EvenNumbers title="Even numbers" number={this.state.number} />
        <Numbers title="All numbers" number={this.state.number} />
        <Numbers title="Just 17" number={17} />
        <OddNumbers title="Odd numbers" number={this.state.number} />
      </div>
    );
  }
}

export default App;