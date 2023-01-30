import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Brand from './pages/Brand';
import Error from './pages/Error';
import Phones from './pages/Phones';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="page-wrapper">
          <Routes>
            <Route path="/" element={<Navigate to="/phones" />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/phones/:brand" element={<Brand />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
