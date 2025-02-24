// MainContent.jsx
import React from 'react';
import '../styles/content.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 

const Content = ({ items }) => {
  const setItem = (id) =>{
    sessionStorage.setItem("photoId", id.id);
    sessionStorage.setItem("photo", id.photo);
    sessionStorage.setItem("photoAuthor", id.author);
    sessionStorage.setItem("photoDescription", id.description);

  }

  return (
    <div className="main">
      {items.map((item) => (
        <div className="main_section" key={item.id}>
          <Link onClick={() => setItem(item)} to="/photo">
            <div className="main_section_top">
              <img src={item.photo} alt={item.description} className="main_section_top_img"></img>
              <div className="main_section_top_author">{item.photographer}</div>
            </div>
          </Link>
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