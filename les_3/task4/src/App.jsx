import React from "react";
import Greeting from "./Greeting.jsx";
import moment from "moment";

// const age = moment(new Date())
//   .diff(moment(new Date('2003-01-01T11:11:11.819Z')), 'years');

const App = () => {
  return (
    <Greeting
      firstName="John"
      lastName="Doe"
      birthDate={moment(new Date())
        .diff(moment(new Date('2003-01-01T11:11:11.819Z')), 'years')}
    />
  );
}

export default App