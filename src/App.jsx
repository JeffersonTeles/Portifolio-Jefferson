import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Minimalist Loading State
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-[#0a0a0f] flex items-center justify-center z-[2000]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-px bg-dark-accent animate-pulse" />
      <span className="font-mono text-[10px] text-dark-accent tracking-[0.3em] uppercase">Initializing_System</span>
    </div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#0a0a0f] text-white selection:bg-dark-accent/30 selection:text-dark-accent overflow-x-hidden">
        
        <AnimatePresence>
          {isLoading && <LoadingScreen key="loader" />}
        </AnimatePresence>

        <CustomCursor />
        <div className="scroll-watcher" />

        <Navbar toggleTheme={() => {}} isDarkMode={true} />
        
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
