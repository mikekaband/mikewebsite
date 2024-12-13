import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import TrafficFatalities from './components/pages/TrafficFatalities';
import SuperStoreSales from './components/pages/SuperStoreSales';
import MeteoriteLandings from './components/pages/MeteoriteLandings';
import BorderCrossing from './components/pages/BorderCrossing';
import CrimeAnalysis from './components/pages/CrimeAnalysis';
import RealEstate from './components/pages/RealEstate';
import ElectricVehicles from './components/pages/ElectricVehicles';
import PlasticPollution from './components/pages/PlasticPollution';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path='/trafficfatalities' element={<TrafficFatalities />} />
        <Route path='/superstoresales' element={<SuperStoreSales />} />
        <Route path='/meteoritelandings' element={<MeteoriteLandings />} />
        <Route path='/bordercrossing' element={<BorderCrossing />} />
        <Route path='/crimeanalysis' element={<CrimeAnalysis />} />
        <Route path='/realestate' element={<RealEstate />} />
        <Route path='/electricvehicles' element={<ElectricVehicles />} />
        <Route path='/plasticpollution' element={<PlasticPollution />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

