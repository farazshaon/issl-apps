import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css'
import TopBanner from './components/TopBanner/TopBanner';
import DetailsPages from './components/DetailsPages/DetailsPages';

function App() {

  return (
    <>
    <TopBanner/>
    <DetailsPages/>
    </>
  );
}

export default App;
