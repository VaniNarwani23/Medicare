import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EmergencyServices from './pages/EmergencyServices';
import HospitalFinder from './pages/HospitalFinder';
import MedicarePlans from './pages/MedicarePlans';
import Telemedicine from './pages/Telemedicine';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/emergency" element={<EmergencyServices />} />
            <Route path="/hospitals" element={<HospitalFinder />} />
            <Route path="/plans" element={<MedicarePlans />} />
            <Route path="/telemedicine" element={<Telemedicine />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;