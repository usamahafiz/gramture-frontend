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


function App() {
  return (
    <div className="app-container">
      <Header />
      <main className='main-content'>
        <Hero />
        <Classes />
         <OurTracks />
        <TestimonialsSection />
        <SubscribeNewsletter />

        {/* Your main content goes here */}
      </main>  
        <Footer />
        
        {/* Your footer content goes here */}
   

      
    </div>
  );
}

export default App;
