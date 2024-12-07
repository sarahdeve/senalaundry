import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import PriceList from './components/PriceList.js';
import About from './components/About.js';
import Services from './components/Services.js';
import NotFound from './components/NotFound.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes> {/* Use Routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/price-list" element={<PriceList />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route Component={NotFound}/> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;