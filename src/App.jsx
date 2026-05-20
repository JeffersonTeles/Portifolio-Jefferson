import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/TechStack'; // Renamed section
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Auto-disable preloader after fake loading time
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-dark-bg text-white selection:bg-dark-accent/30 overflow-x-hidden">
        <CustomCursor />
        
        <AnimatePresence mode="wait">
          {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

        {!isLoading && (
          <SmoothScroll>
            <Navbar />
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
          </SmoothScroll>
        )}
      </div>
    </Router>
  );
}

export default App;
