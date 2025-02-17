import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header.jsx';
import Content from './components/content.jsx';
import Filters from './components/Filters.jsx';
import items from './assets/Data/photos.json'

const App = () => {
  // State for the currently active filter (null means no active filter)
  const [activeFilter, setActiveFilter] = useState(null);
  // State to control the visibility of the filter section
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Example list of items; each item has multiple tags corresponding to filters.
``

  // Filter the items based on the active filter.
  // If activeFilter is set, only include items whose tags include that filter.
  const filteredItems = activeFilter
    ? items.filter(item => item.tags && item.tags.includes(activeFilter))
    : items;

  // Callback to update the active filter.
  const handleFilterChange = (filterId, action) => {
    if (action === 'activate') {
      setActiveFilter(filterId);
    } else if (action === 'deactivate') {
      setActiveFilter(null);
    }
  };

  // Toggle the filter section visibility.
  const toggleFilterSection = () => {
    setIsFilterVisible(prev => !prev);
  };

  return (
    <div className="filterable-app">
      <div className="body">
        <div className="body-Section">
          <Header isFilterVisible={isFilterVisible} toggleFilterSection={toggleFilterSection} />
          <div className={`filter-section-wrapper ${isFilterVisible ? 'visible' : 'hidden'}`}>
            <Filters activeFilter={activeFilter} onFilterChange={handleFilterChange} />
          </div>
          <Content items={filteredItems} />
        </div>
      </div>
    </div>
  );
};


export default App
