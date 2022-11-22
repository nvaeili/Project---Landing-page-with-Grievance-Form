import React from 'react';
import Navbar from './component/Navbar';
import LandingPage from './component/LandingPage';
import GrievanceForm from  './form/GrievanceForm'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>



      <BrowserRouter>
      <Routes>
        <Route path = '/' element={<LandingPage/>}/>
        <Route path = '/form' element={<GrievanceForm/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
