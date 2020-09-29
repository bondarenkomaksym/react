import React from 'react';
import Transaction from './Transaction';


const TransactionsList = ({ transactions }) => {

  return (
    <ul className="transactions">
      {transactions.map(transaction => <Transaction />)}

    </ul >);

}


//в элементах списка должно быть свойство key={}
//ключ должен находится в том файле который отрисовывает список
//{...user} такая запись в свойствах элемента позволяет передать все свойства из нашего объекта
export default TransactionsList;