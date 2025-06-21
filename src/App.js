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
import AddContent from './pages/Admin-Dashboard/AddTopic';


function App() {
  return (
    <>
    <AddContent/>

    </>
  );
}

export default App;
