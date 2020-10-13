import React from "react";
import moment from "moment";
import { useState, useEffect } from 'react';



function Clock(props) {
  let { location, offset } = props;

  const formatDate = (offset) => moment().utcOffset(offset).format('HH:mm:ss');
  // console.log(formatDate(offset));

  const [time, setTime] = useState(formatDate(offset + 1));


  //заменяем componentDidMount и componentWillUnmount
  useEffect(() => {
    let timerId = setInterval(() => {
      setTime(formatDate(offset + 1))
    }, 1000);

    return () => clearInterval(timerId);
  });

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
}

export default Clock;