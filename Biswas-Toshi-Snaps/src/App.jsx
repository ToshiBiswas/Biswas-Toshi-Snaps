import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header.jsx';
import Content from './components/content.jsx';
import Filters from './components/Filters.jsx';
import data from '[filepath]/json/docs.json'

const App = () => {
  // State for the currently active filter (null means no active filter)
  const [activeFilter, setActiveFilter] = useState(null);
  // State to control the visibility of the filter section
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  // Example list of items; each item has multiple categories corresponding to filters.
  const items = items.[
    { id: 1, name: 'Item 1', categories: ['filter1', 'filter2'] },
    { id: 2, name: 'Item 2', categories: ['filter2'] },
    { id: 3, name: 'Item 3', categories: ['filter1', 'filter3'] },
    { id: 4, name: 'Item 4', categories: ['filter3'] },
    { id: 5, name: 'Item 5', categories: ['filter2', 'filter3'] }
  ];

  // Filter the items based on the active filter.
  // If activeFilter is set, only include items whose categories include that filter.
  const filteredItems = activeFilter
    ? items.filter(item => item.categories && item.categories.includes(activeFilter))
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
      <Header isFilterVisible={isFilterVisible} toggleFilterSection={toggleFilterSection} />
      <div className="body">
        <div className={`filter-section-wrapper ${isFilterVisible ? 'visible' : 'hidden'}`}>
          <Filters activeFilter={activeFilter} onFilterChange={handleFilterChange} />
        </div>
        <Content items={filteredItems} />
      </div>
    </div>
  );
};


export default App
