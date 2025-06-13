import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Hairdryers from './pages/hairdryers'; // Assuming you want a separate page for hairdryers
import './styles/common.css';

// Import other components that are always visible (like Header, Footer)
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Header visible on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hairdryers" element={<Hairdryers />} />
          {/* Add other routes for categories, items, etc., here as needed */}
        </Routes>
        <Footer /> {/* Footer visible on all pages */}
      </div>
    </Router>
  );
}

export default App;
