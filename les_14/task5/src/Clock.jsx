import React from "react";
import moment from "moment";
import { useState, useEffect } from 'react';



function Clock(props) {
  let { location, offset } = props;

  // const formatDate = (offset) => moment().utcOffset(offset).format("LTS");

  const [date, setDate] = useState(new Date());


  //заменяем componentDidMount и componentWillUnmount
  useEffect(() => {
    let timerId = setInterval(() => time(), 1000);

    return () => clearInterval(timerId);

  });

  function time() {
    setDate(new Date());
  }

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{date.toLocaleTimeString()}</div>
    </div>
  );
}

export default Clock;