import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import { Navbar } from './components/Navbar';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

