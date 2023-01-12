import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Brand from './pages/Brand';
import Error from './pages/Error';
import Phones from './pages/Phones';

function App() {
  return (
    <div className="App">
      <div className="page_container">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/phones" />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/phones/:brand" element={<Brand />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
