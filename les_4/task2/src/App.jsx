import React from "react";
import Clock from "./Clock.jsx";

const App = () => {
  return (
    <>
      <Clock location={`Reykjavík`} offset={0} />
      <Clock location={`Denpasar`} offset={8} />
      <Clock location={`Bangkok`} offset={7} />
    </>
  );
};
export default App;