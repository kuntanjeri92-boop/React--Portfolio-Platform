import React from 'react';

function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="project-search">Search Projects</label>
      <input
        id="project-search"
        type="text"
        placeholder="Search by title, category, or keyword..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;