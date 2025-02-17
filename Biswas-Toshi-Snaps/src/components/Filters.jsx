import React from 'react';
import '../styles/FilterSection.css';

// Example filters (this data could also come from a JSON file)
const filters = [
  { id: 'filter1', label: 'Filter 1' },
  { id: 'filter2', label: 'Filter 2' },
  { id: 'filter3', label: 'Filter 3' }
];

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
    <div>
        <h1 className filter_title>
            Filters: 
        </h1>
        <div className="filter">
        {filters.map((filter) => (
            <button
            key={filter.id}
            onClick={() => handleFilterClick(filter.id)}
            className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
            >
            {filter.label}
            </button>
        ))}
        </div>
    </div>

  );
};

export default Filters;
