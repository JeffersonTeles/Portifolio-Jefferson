import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Skills from './sections/Skills';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="fixed inset-0 bg-[#050505]" />;

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#050505] text-white selection:bg-luxury-accent/30 selection:text-white overflow-x-hidden">
        <CustomCursor />
        <Navbar toggleTheme={() => {}} isDarkMode={isDarkMode} isMuted={true} />
        
        <main className="relative z-10 w-full">
          <Routes>
            <Route path="/" element={
              <div className="flex flex-col">
                <Hero />
                <About />
                <Skills />
                <Projects />
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
