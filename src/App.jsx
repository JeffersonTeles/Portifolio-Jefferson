import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
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
import { SectionProvider } from './context/SectionContext';

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
  }, []);

  if (!isMounted) return <div className="fixed inset-0 bg-[#050816]" />;

  return (
    <Router>
      <ScrollToTop />
      <SectionProvider>
        <div className="relative min-h-screen bg-premium-bg text-white selection:bg-premium-accent/30 selection:text-white">
          
          <CustomCursor />
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
      </SectionProvider>
    </Router>
  );
}

export default App;
