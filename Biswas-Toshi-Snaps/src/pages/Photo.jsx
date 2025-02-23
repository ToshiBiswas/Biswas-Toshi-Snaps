import { useEffect, useState } from 'react';
import '../styles/App.css';
import Header from '../components/Header.jsx';
import Content from '../components/content.jsx';
import Filters from '../components/Filters.jsx';
import Footer from '../components/Footer.jsx';
import PhotoApi from "../scripts/PhotoApi.js";
const Photo = (photo) =>{
    const [token, setToken] = useState(null);

}