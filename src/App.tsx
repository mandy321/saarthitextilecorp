import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Gallery from './pages/Gallery';
import Manufacturing from './pages/Manufacturing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
      </Routes>
    </Router>
  );
}

export default App;