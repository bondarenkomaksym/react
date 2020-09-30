import React from "react";

class Life extends React.Component {
  constructor(props) {
    super(props);
    //1
    console.log("constructor: good place to create state");
  }


  //3 срабатывает когда рендер вернул разметку на страницу
  componentDidMount() {
    console.log("componentDidMount: API calls, subscriptions");
  }

  //- перерисовываем рендер в зависимости от условий
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    console.log(
      "shouldComponentUpdate(nextProps, nextState): decide to render or not to render"
    );
    return nextProps.number % 2;
  }

  //- выводим предыдущие свойства
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log(
      "componentDidUpdate(prevProps, prevState): some updates based on new props"
    );
  }

  //- срабатывает при скрывании результата рендера, когда компонента удаляется со страницы
  componentWillUnmount() {
    console.log(
      "componentWillUnmount(): cleanup before DOM related to component will be removed"
    );
  }

  //2 возвращаем React element для отрисовки DOM
  render() {
    console.log("return React element to build DOM");
    return <div>{this.props.number}</div>;
  }
}

export default Life;