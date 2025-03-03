import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/FilterSection.css";

const Filters = ({ activeFilter, onFilterChange }) => {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    // Fetch filters from the API
    axios.get("http://localhost:5050/tags")
      .then((response) => {
        setFilters(response.data);
      })
      .catch((error) => {
        console.error("Error fetching filters: ", error);
      });
  }, []);

  const handleFilterClick = (filterId) => {
    if (activeFilter === filterId) {
      onFilterChange(filterId, "deactivate");
    } else {
      onFilterChange(filterId, "activate");
    }
  };

  return (
    <div className="filters">
      <h1 className="filter_title">Filters:</h1>
      <div className="filter">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`filter-button ${activeFilter === filter ? "active" : ""}`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;

