import React from "react";
import { Router } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Contacts from "./Contacts";

const App = () => {

  return (
    <div className="page">
      <Home />
      <Products />
      <Contacts />
    </div>
  );

}

export default App;