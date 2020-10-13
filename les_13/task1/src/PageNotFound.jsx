import React from "react";
import { Link } from "react-router-dom";

class PageNotFound extends React.Component {

  render() {
    return (
      <div className="page__content">
        <h1>😢</h1>
        <Link to="/">Go home</Link>
      </div>
    );
  }
};

export default PageNotFound;