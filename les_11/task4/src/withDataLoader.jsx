import React from 'react';
import Spinner from './Spinner';


export const withDataLoader = ({ baseUrl }) => {

  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null
      };
    }

    componentDidMount() {
      fetchData(baseUrl).then(response => response.json())
        .then(data => this.setState({ data }));
    }

    render() {
      // ... и рендерит оборачиваемый компонент со свежими данными!
      // Обратите внимание, что мы передаём остальные пропсы
      return <WrappedComponent data={this.state.data} />;
    }
  }
};
