import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import DonorHome from './components/DonorHome.js';
import Header from './components/Header.js'; // Import the Header component
import Home from './components/Home.js';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import BeneficiaryHome from './components/BeneficiaryHome.js';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <Router>
      <div className="App">

      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/donate" element={<DonorHome/>}/>
        <Route
          path="/donor-home"
          element={<DonorHome isAuthenticated={isAuthenticated} />}
        />
        <Route path="/signup" element={<Signup />} />
          <Route path="/beneficiary-home" element={<BeneficiaryHome />} />
      </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
