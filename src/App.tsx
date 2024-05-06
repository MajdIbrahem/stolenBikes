import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';

import BikeDetails from './pages/BikeDetails';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          
          <Route path='/bike/:id' element={<BikeDetails/>}></Route>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
