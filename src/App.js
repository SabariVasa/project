// 

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Films from './pages/Films';
import AboutUs from './pages/AboutUs';
import BookUs from './pages/BookUs';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/films" element={<Films />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/book-us" element={<BookUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
