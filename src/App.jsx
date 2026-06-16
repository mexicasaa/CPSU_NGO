import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import MissionPage from './pages/MissionPage';
import VisionPage from './pages/VisionPage';
import StatementsPage from './pages/StatementsPage';
import MantraPage from './pages/MantraPage';
import ContactPage from './pages/ContactPage';
import LeadershipPage from './pages/LeadershipPage';
import ProgramsPage from './pages/ProgramsPage';
import DonationPage from './pages/DonationPage';
import PartnersPage from './pages/PartnersPage';
import MediaPage from './pages/MediaPage';
import VolunteerPage from './pages/VolunteerPage';
import CareersPage from './pages/CareersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import DynamicStoryPage from './pages/DynamicStoryPage';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <SmoothScroll>
      {!isAdminRoute && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/statements" element={<StatementsPage />} />
          <Route path="/mantra" element={<MantraPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/blog/:id" element={<DynamicStoryPage />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </SmoothScroll>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
