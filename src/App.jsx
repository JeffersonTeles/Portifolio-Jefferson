import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Premium Striking Components
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Section Provider
import { SectionProvider } from './context/SectionContext';

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    document.body.style.overflowX = 'hidden';
  }, []);

  if (!isMounted) return <div className="fixed inset-0 bg-[#05060f]" />;

  return (
    <Router>
      <ScrollToTop />
      <SectionProvider>
        <div className="relative min-h-screen bg-builder-bg text-white selection:bg-builder-accent/30 selection:text-builder-accent overflow-hidden font-sans">
          
          <CustomCursor />
          <Navbar />
          
          <main className="relative z-10 w-full">
            <Routes>
              <Route path="/" element={
                <div className="flex flex-col">
                  <Hero />
                  <About />
                  <Projects />
                  <Contact />
                </div>
              } />
            </Routes>
          </main>
          
          <Footer />
          
          {/* Subtle Ambient Background */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-builder-accent/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]" />
          </div>

        </div>
      </SectionProvider>
    </Router>
  );
}

export default App;
