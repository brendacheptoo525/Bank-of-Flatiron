
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (typeof onSearch === 'function') {
      onSearch(searchTerm);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;