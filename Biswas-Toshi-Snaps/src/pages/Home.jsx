import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Header from '../components/Header.jsx';
import Content from '../components/content.jsx';
import Filters from '../components/Filters.jsx';
import Footer from '../components/Footer.jsx';
import axios from 'axios';

const Home = () => {
  const API_BASE_URL = 'https://unit-3-project-c5faaab51857.herokuapp.com';
  const [apiKey, setApiKey] = useState(null);
  const [items, setData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchApiKeyAndData = async () => {
      try {
        // Step 1: Get the API key from /register
        let id = sessionStorage.getItem("sessionId");
        if (typeof id !== "string") {
          const response = await axios.get(`${API_BASE_URL}/register`);
          id = response.data.api_key;
          sessionStorage.setItem("sessionId", id);
        }
        setApiKey(id);
        
        // Step 2: Use the API key to fetch data
        const dataResponse = await axios.get(`${API_BASE_URL}/photos/?api_key=${id}`);
        setData(dataResponse.data);
      } catch (err) {
        console.error(err);
        setError(err.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchApiKeyAndData();
  }, []); // Empty dependency array so it runs once on mount
  
  // State for the currently active filter (null means no active filter)
  const [activeFilter, setActiveFilter] = useState(null);
  // State to control the visibility of the filter section
  const [isFilterVisible, setIsFilterVisible] = useState(false);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="filterable-app">
      <div className="body" style={{ margin: "0px" }}>
        <div className="body-Section">
          <Header isFilterVisible={isFilterVisible} toggleFilterSection={toggleFilterSection} />
          <div className="content">
            <div 
              className={`filter-section-wrapper ${isFilterVisible ? 'visible' : 'hidden'}`}
              style={{
                width: `${isFilterVisible && window.innerWidth >= 1280 ? '50%' : window.innerWidth < 1280 ? "100%" : "0%"}`
              }}
            >
              <Filters activeFilter={activeFilter} onFilterChange={handleFilterChange} />
            </div>
            <div className="content-left" style={{ width: "100%" }}>
              <div className="missions">
                <h1 className="mission_header">Our Mission</h1>
                <h1 className="mission_quote">
                  Provide photographers a space to share photos of the neighborhoods they cherish, 
                  <span className="mission_quote-italics">
                    expressed in their unique style.
                  </span>
                </h1>
              </div>
              <Content items={filteredItems}/>   
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Home;
