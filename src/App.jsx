import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Brand from './pages/Brand';
import Error from './pages/Error';
import Phones from './pages/Phones';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="page_container">
          <Routes>
            <Route path="/" element={<Navigate to="/phones" />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/phones/:brand" element={<Brand />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
