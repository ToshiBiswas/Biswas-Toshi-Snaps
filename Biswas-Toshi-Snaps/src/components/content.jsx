// MainContent.jsx
import React from 'react';
import '../styles/content.css';

const Content = ({ items }, {data}) => {
  return (
    <div className="main">
        {items.map((item) => (
            <div className="main_section" key={item.id}>
                <div className="main_section_top">
                    <img src={item.photo} alt={item.description} className="main_section_top_img"></img>
                    <div className="main_section_top_author">{item.photographer}</div>
                </div>
                <div className="main_section_bottom">
                  {item.tags.map((tag) => (
                    <button key={tag} className="main_section_bottom_button">
                      {tag}
                    </button>
                  ))} 
                </div>
            </div>
        ))}
    </div>
  );
};

export default Content;