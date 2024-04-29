import React, { useState } from 'react';
import './App.css';
import TransactionTable from './TransactionTable'; // Importing TransactionTable component
import TransactionForm from './TransactionForm'; // Importing TransactionForm component
import SearchBar from './SearchBar'; // Importing SearchBar component

const App = () => {
  // Initial transactions data
  const initialTransactions = [
    {
      "id": 1,
      "date": "2019-12-01",
      "description": "Paycheck from Bob's Burgers",
      "category": "Income",
      "amount": 1000
    },
    {
      "id": 2,
      "date": "2019-12-01",
      "description": "South by Southwest Quinoa Bowl at Fresh & Co",
      "category": "Food",
      "amount": -10.55
    },
    {
      "id": 3,
      "date": "2019-12-02",
      "description": "South by Southwest Quinoa Bowl at Fresh & Co",
      "category": "Food",
      "amount": -10.55
    },
    {
      "id": 4,
      "date": "2019-12-04",
      "description": "Sunglasses, Urban Outfitters",
      "category": "Fashion",
      "amount": -24.99
    },
    {
      "id": 5,
      "date": "2019-12-06",
      "description": "Venmo, Alice Pays you for Burrito",
      "category": "Food",
      "amount": 8.75
    },
    {
      "id": 6,
      "date": "2019-12-06",
      "description": "Chipotle",
      "category": "Food",
      "amount": -17.59
    },
    {
      "id": 7,
      "date": "2019-12-07",
      "description": "Birthday Check from Grandma",
      "category": "Gift",
      "amount": 50
    },
    {
      "id": 8,
      "date": "2019-12-09",
      "description": "Lyft Ride",
      "category": "Transportation",
      "amount": -13.25
    },
    {
      "id": 9,
      "date": "2019-12-11",
      "description": "Paycheck from Bob's Burgers",
      "category": "Income",
      "amount": 1000
    },
    {
      "id": 10,
      "date": "2019-12-16",
      "description": "Tickets, Flatiron Multiplex Cinemas",
      "category": "Entertainment",
      "amount": -24
    },
    {
      "id": 11,
      "date": "2019-12-16",
      "description": "MTA Vending Machine: MetroCard",
      "category": "Transportation",
      "amount": -116.39
    },
    {
      "id": 12,
      "date": "2019-12-17",
      "description": "Venmo, Pay Roommate for Rent",
      "category": "Housing",
      "amount": -975
    },
    {
      "id": 13,
      "date": "2022-07-09",
      "description": "Office lunch",
      "category": "Food",
      "amount": 2000
    },
    {
      "id": 14,
      "date": "2022-07-09",
      "description": "Office lunch Wednesday",
      "category": "Food",
      "amount": 3000
    }
  ];

  // Initial categories
  const initialCategories = [
    "Income",
    "Food",
    "Fashion",
    "Gift",
    "Transportation",
    "Entertainment",
    "Housing"
  ];

  // State to manage transactions and search term
  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    // Generating a unique id for the new transaction
    newTransaction.id = Math.max(...transactions.map(transaction => transaction.id), 0) + 1;
    // Updating transactions state with the new transaction
    setTransactions([...transactions, newTransaction]);
  };

  // Function to handle search term changes
  const handleSearch = (term) => {
    // Updating search term state
    setSearchTerm(term);
  };

  // Filtering transactions based on search term
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* Application heading */}
      <h1 className="heading">The Royal Bank of Flatiron</h1>
      {/* Search bar component */}
      <div className="search-bar">
        <SearchBar onSearch={handleSearch} />
      </div>
      {/* Transaction form component */}
      <div className="transaction-form">
        <TransactionForm onAddTransaction={addTransaction} categories={initialCategories} />
      </div>
      {/* Transaction table component */}
      <div className="transactions-table">
        <TransactionTable transactions={filteredTransactions} />
      </div>
    </div>
  );
};

export default App;
