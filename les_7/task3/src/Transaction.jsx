import React from 'react';

const Transaction = ({ from, to, amount, rate, id }) => {
  return (
    <li className="transaction" key={id}>
      <span className="transaction__date">1</span>
      <span className="transaction__time">2</span>
    </li>
  )
}

export default Transaction;