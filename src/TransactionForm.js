// TransactionForm.js

import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(formData); // Calls the parent component's function with form data
    setFormData({ date: '', description: '', category: '', amount: '' }); // Resets form data after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for date, description, category, and amount */}
      <label>Date:</label>
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <label>Description:</label>
      <input type="text" name="description" value={formData.description} onChange={handleChange} />
      <label>Category:</label>
      <input type="text" name="category" value={formData.category} onChange={handleChange} />
      <label>Amount:</label>
      <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
      {/* Button to submit the form */}
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
