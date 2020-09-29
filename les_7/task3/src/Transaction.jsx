import React from 'react';

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date"></span>
      <span className="transaction__time">{time}</span>
      <span className="transaction__assets">{from}→{to}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{amount}</span>
    </li>
  )
}

export default Transaction;