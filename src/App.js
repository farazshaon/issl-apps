import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import './assets/css/App.css'
import NavBar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider';
import AboutUs from './components/AboutUs/AboutUs';
function App() {

  return (
    <>
      <Header/>
      <NavBar/>
      <Slider/>
      <AboutUs/>
    </>
  );
}

export default App;
