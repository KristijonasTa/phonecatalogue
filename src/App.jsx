import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Brand from './pages/Brand';
import Error from './pages/Error';
import Phones from './pages/Phones';

function App() {
  return (
    <div className="App">
      <div className="page_container">
        <Routes>
          <Route path="/" element={<h1>Welcome to Phones catalogue page</h1>} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/phones/:brand" element={<Brand />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
