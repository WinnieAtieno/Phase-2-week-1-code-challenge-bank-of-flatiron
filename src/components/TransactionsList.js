import React from 'react';
import Transaction from './Transaction';

function TransactionsList({ transactions = [], handleDelete }) {
  return (
    <table className="ui celled striped padded table">
      <thead>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Delete</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            id={transaction.id}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
            handleDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
