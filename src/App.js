import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css'
import InboundServices from './pages/InboundServices';
import Home from './pages/HomePages'
import AboutUsPages from './pages/AboutUsPages'
import OutboundServicesPages from './pages/OutboundServicesPages';
import DetailsPages from './components/DetailsPages/DetailsPages';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
function App() {

  return (
    <>

  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPages />} />
          <Route path="/inboundservices" element={<DetailsPages />} />
          <Route path="/outboundservices" element={<DetailsPages />} />    
          <Route path="/specializedservices" element={<DetailsPages />} />
        </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
