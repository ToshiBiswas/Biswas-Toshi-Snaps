import Home from "./pages/Home.jsx";
import Photo from "./pages/Photo.jsx"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import {useEffect,useState} from 'react';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Photo" element={<Photo />} />

    </Routes>
  </BrowserRouter>
  );
};


export default App
