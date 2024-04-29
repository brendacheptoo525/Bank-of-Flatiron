import React from 'react';

// Functional component for displaying a table of transactions
const TransactionsTable = ({ transactions }) => {
  return (
    <table>
      {/* Table header */}
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      {/* Table body */}
      <tbody>
        {/* Mapping through transactions array to render each transaction */}
        {transactions.map((transaction) => (
          <tr key={transaction.id}> {/* Unique key for each transaction */}
            {/* Displaying transaction details in table cells */}
            <td>{transaction.date}</td> {/* Date of the transaction */}
            <td>{transaction.description}</td> {/* Description of the transaction */}
            <td>{transaction.category}</td> {/* Category of the transaction */}
            <td>{transaction.amount}</td> {/* Amount of the transaction */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
