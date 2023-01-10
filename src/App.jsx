import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Brand from './pages/Brand';
import Error from './pages/Error';
import Home from './pages/Home';
import Phones from './pages/Phones';

function App() {
  return (
    <div className="App">
      <div className="page_container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/phones/:brand" element={<Brand />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
