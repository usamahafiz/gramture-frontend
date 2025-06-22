import React from 'react';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import Header from './components/header';
import Footer from './components/footer'; // Assuming you have a Footer component
import Hero from './components/hero';
import Classes from './components/classes';
import TestimonialsSection from './components/testimonial';
import OurTracks from './components/ourtrack';
import SubscribeNewsletter from './components/subscribe';
import Notes from './components/notes/description';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/frontend/home'; // Assuming you have a Home component

function App() {
  return (
    <>
    <Routes>
<Route path="/" element={<Home/>} />
<Route path="/notes/:selectedClass" element={<Notes />} />
<Route path="/notes/:selectedClass/:category" element={<Notes />} />
<Route path="/notes/:selectedClass/:category/:subcategory" element={<Notes />} />
</Routes>
  
    </>
  );
}

export default App;
