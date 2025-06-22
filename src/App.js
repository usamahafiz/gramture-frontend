import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Correct

import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import Classes from './components/classes';
import TestimonialsSection from './components/testimonial';
import OurTracks from './components/ourtrack';
import AboutSection from "./components/AboutSection";

function HomePage() {
  return (
    <>
      <Hero />
      <Classes />
      <OurTracks />
      <TestimonialsSection />
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
