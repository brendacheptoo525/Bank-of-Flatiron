// SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  // State to manage search term
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search term changes
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle search button click
  const handleSearch = () => {
    if (typeof onSearch === 'function') {
      onSearch(searchTerm);
    }
  };

  return (
    <div>
      {/* Input field for search term */}
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={handleChange}
      />
      {/* Button to trigger search */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
