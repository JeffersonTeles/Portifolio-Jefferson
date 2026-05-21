import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Remove the emergency cache clear script to keep things clean once site is stable
    // Also ensuring no overflow on body
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
  }, []);

  if (!isMounted) return <div className="fixed inset-0 bg-[#0a0a0f]" />;

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#0a0a0f] text-white selection:bg-dark-accent/30 selection:text-dark-accent">
        
        {/* Visual & Interaction Layer */}
        <CustomCursor />
        
        {/* Scroll Watcher Line */}
        <div className="scroll-watcher" />

        <Navbar toggleTheme={() => {}} isDarkMode={true} isMuted={true} />
        
        <main className="relative z-10 w-full overflow-hidden">
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
