import React from "react";
//чтобы не экспортировать библиотеку, можно добавить перед компонентой "React"
// import React, { Component } from 'react';

class GoodButton extends React.Component {
  //объявляем обработчик в виде метода
  handleClick(e) {
    //в консоль выводим объект события(е)
    // console.log(e.target.textContent);
    alert(e.target.textContent);
  }
  //для лучшей читаемости JSX обработчик(handleClick) выносим наружу
  render() {
    return (
      <button className="fancy-button"
        onClick={this.handleClick}
      >
        Click me!
      </button>
    )
  }
}


// const GoodButton = () => (
//   <button className="fancy-button"
//     onClick={() => alert("Good job!")}
//   >
//     Click me!
//   </button>
// );

export default GoodButton;


