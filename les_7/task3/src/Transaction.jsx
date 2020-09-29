import React from 'react';
import moment from "moment";

const getDate = moment().format("DD MMM");

const Transaction = ({ from, to, amount, rate, time }) => {

  const options = {
    hour: "numeric",
    minute: "numeric",
  };

  const formatTime = new Date(time);
  const getTime = new Intl.DateTimeFormat("en-GB", options).format(formatTime);
  const getAmount = new Intl.NumberFormat("en-GB").format(amount);

  return (
    <li className="transaction">
      <span className="transaction__date">{getDate}</span>
      <span className="transaction__time">{getTime}</span>
      <span className="transaction__assets">{from} → {to}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{getAmount}</span>
    </li>
  )
}

export default Transaction;