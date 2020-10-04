import React from "react";

class Search extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    // console.log(event);
    this.setState({ value: event.target.value });
  }

  //отменяем дефолтное поведение формы, чтобы не было перезагрузки
  search = event => {
    event.preventDefault();
    // console.log(this.state.value);
    alert(`Search text: ${this.state.value}`);
  }

  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          className="search__input" />
        <button className="search__button" type="submit">Search</button>
      </form>
    )
  }
}

export default Search;