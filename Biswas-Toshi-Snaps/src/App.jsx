import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header.jsx';
import Content from './components/content.jsx';
import Filters from './components/Filters.jsx';
import items from './assets/Data/photos.json'
import Footer from './components/Footer.jsx';
const App = () => {
  // State for the currently active filter (null means no active filter)
  const [activeFilter, setActiveFilter] = useState(null);
  // State to control the visibility of the filter section
  const [isFilterVisible, setIsFilterVisible] = useState(false);
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
      <div className="body" style={{margin: "0px"}}>
        <div className="body-Section">
          <Header isFilterVisible={isFilterVisible} toggleFilterSection={toggleFilterSection} />
          <div className="content">
            <div className={`filter-section-wrapper ${isFilterVisible ? 'visible' : 'hidden'}`} style={{width: `${isFilterVisible &&window.innerWidth >= 1280 ? '50%': window.innerWidth < 1280 ? "100%":"0%"}`}}>
              <Filters activeFilter={activeFilter} onFilterChange={handleFilterChange} />
            </div>
            <div className="content-left"style={{width: "100%"}}>
              <div className="missions">
                
                <h1 className="mission_header">Our Mission</h1>
                <h1 className="mission_quote">Provide photographers a space to share
                photos of the neighborhoods they cherish, <span className="mission_quote-italics">expressed in their unique style.</span></h1>

              </div>
              <Content items={filteredItems} />   
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};


export default App
