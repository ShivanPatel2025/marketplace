import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input className="search-input" type="search" placeholder="Search products..." />
    </div>
  );
}

export default SearchBar;
