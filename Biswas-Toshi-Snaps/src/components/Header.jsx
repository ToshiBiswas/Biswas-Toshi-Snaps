import '../styles/Header.css'; 


const Header = ({ isFilterVisible, toggleFilterSection }) => {
  return (
    <header className="header">
        <div className="header_section">
            <h1 className="header_section_title">Snaps</h1>
            <button onClick={toggleFilterSection} className={`header_section_button ${isFilterVisible ? 'active' : ''}`}>
              Filters
            </button>
        </div>

    </header>
  );
};

export default Header;
