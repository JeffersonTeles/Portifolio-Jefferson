import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import FuturisticBackground from './components/FuturisticBackground';
import HUDOverlay from './components/HUDOverlay';
import SectionMetadata from './components/SectionMetadata';
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Clients from './sections/Clients';
import Lab from './sections/Lab';

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-dark-bg text-white selection:bg-dark-accent/30 overflow-x-hidden">
        
        {/* Background Layer */}
        <FuturisticBackground />
        
        {/* Interaction Layer */}
        <CustomCursor />
        <HUDOverlay />
        
        <Navbar toggleTheme={() => {}} isDarkMode={true} isMuted={true} />
        
        <main className="relative z-10 w-full">
          <Routes>
            <Route path="/" element={
              <div className="flex flex-col">
                <Hero />
                <SectionMetadata text="SYS_CORE // 01_ABOUT_MODULE" />
                <About />
                <SectionMetadata text="SYS_DATA // 02_SKILLS_MATRIX" />
                <Skills />
                <SectionMetadata text="SYS_EXP // 03_SELECTED_WORKS" />
                <Projects />
                <SectionMetadata text="SYS_AUTH // 04_TRUSTED_CLIENTS" />
                <Clients />
                <SectionMetadata text="SYS_R&D // 05_LAB_EXPERIMENTS" />
                <Lab />
                <SectionMetadata text="SYS_COMM // 06_UPLINK_ESTABLISHED" />
                <Contact />
              </div>
            } />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
