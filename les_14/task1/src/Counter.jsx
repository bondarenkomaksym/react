import React from "react";
import { useState } from "react";


const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <button data-action="decrease" className="counter__button" onClick={() => setCounter(counter - 1)}>-</button>
      <span className="counter__value" onClick={() => setCounter(0)}>{counter}</span>
      <button data-action="increase" className="counter__button" onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

// class Counter extends React.Component {
//   //начальное состояние обработчика храним в конструкторе
//   state = {
//     counter: 0,
//   };


//   //состояние счётчика меняем через setState
//   decrease = () => {
//     this.setState({
//       counter: this.state.counter - 1,
//     })
//   }
//   increase = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     })
//   }
//   //метод для обнуления счётчика по клику на саму цифру
//   reset = () => {
//     this.setState({
//       counter: 0,
//     })
//   }

//   render() {
//     return (
//       <div className="counter">
//         <button data-action="decrease" className="counter__button" onClick={this.decrease}>-</button>
//         <span className="counter__value" onClick={this.reset}>{this.state.counter}</span>
//         <button data-action="increase" className="counter__button" onClick={this.increase}>+</button>
//       </div>
//     )
//   }
// }


export default Counter;