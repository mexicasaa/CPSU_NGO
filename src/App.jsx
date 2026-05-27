import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import FocusAreasPage from './pages/FocusAreasPage';
import ContactPage from './pages/ContactPage';
import LeadershipPage from './pages/LeadershipPage';
import ProgramsPage from './pages/ProgramsPage';
import DonationPage from './pages/DonationPage';
import PartnersPage from './pages/PartnersPage';
import MediaPage from './pages/MediaPage';
import VolunteerPage from './pages/VolunteerPage';
import CareersPage from './pages/CareersPage';
import './App.css';

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/focus-areas" element={<FocusAreasPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
        </main>
        <Footer />
      </SmoothScroll>
    </Router>
  );
}

