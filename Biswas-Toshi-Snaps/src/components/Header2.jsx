import '../styles/Header2.css'; 
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 


const Header2 = () => {
  return (
    <header className="header">
        <div className="header_section">
            <h1 className="header_section_title">Snaps</h1>
            <Link className='header_section_right' to="/">
              <img src="../../public/icons/Arrow.svg" className='header_section_right_arrow'></img>
              <h1 className="header_section_right_next">Home</h1>
            </Link >

        </div>
    </header>
  );
};

export default Header2;
