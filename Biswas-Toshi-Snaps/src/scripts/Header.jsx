import { useState } from 'react'
import FilterSection from './Filters.jsx';
import '../styles/header.css'; 


const Header = ({ isFilterVisible, toggleFilterSection }) => {
  return (
    <header className="header">
        <div className="header_section">
            <h1 className=""></h1>
            <button onClick={toggleFilterSection} className="header_section_button">
                {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
            </button>
        </div>

    </header>
  );
};

export default Header;
