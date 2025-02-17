// MainContent.jsx
import React from 'react';
import '../styles/content.css';

const Content = ({ items }) => {
  return (
    <div className="main">
        {items.map((item) => (
            <div className="main_section">
                <div className="main_section_top">
                    <img src={item.photo} alt={item.description} className="main_section_top_img"></img>
                    <div class="main_section_top_author">{item.author}</div>
                </div>
                <div className="main_section_bottom">
                  {item.categories.map((category) => (
                    <button key={category} className="main_section_bottom_button">
                      {category}
                    </button>
                  ))}
                </div>
            </div>
        ))}
    </div>
  );
};

export default Content;