import React from 'react';
import '../styles/FilterSection.css';
import filters from "../assets/Data/tags.json"
// Example filters (this data could also come from a JSON file)

const Filters = ({ activeFilter, onFilterChange }) => {
  const handleFilterClick = (filterId) => {
    if (activeFilter === filterId) {
      // If already active, call the deactivation action.
      onFilterChange(filterId, 'deactivate');
    } else {
      // Otherwise, activate the filter.
      onFilterChange(filterId, 'activate');
    }
  };

  return (
    <div className="filters">
        <h1 className= "filter_title">
            Filters: 
        </h1>
        <div className="filter">
        {filters.map((filter) => (
            <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
          className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
            >
            {filter}
            </button>
        ))}
        </div>
    </div>

  );
};

export default Filters;
