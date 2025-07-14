import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ChevronRight, Menu, X, Activity, Code, Brain, Shield, Users, Mail, Phone, MapPin, ArrowRight, Star, Globe, Zap, Heart, Target, Eye } from 'lucide-react';

// Importar páginas
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';

// Importar componentes de layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/equipo" element={<TeamPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
