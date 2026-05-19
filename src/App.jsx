import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';
import LusionBackground from './components/LusionBackground';
import AIConsole from './components/AIConsole';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-700 ${isDarkMode ? 'bg-[#050505] text-[#F0F1FA]' : 'bg-lusion-bg text-lusion-text'} selection:bg-lusion-primary selection:text-white overflow-x-hidden`}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <SmoothScroll>
          <CustomCursor />
          <LusionBackground isDark={isDarkMode} />
          <AIConsole />
          <ScrollProgress />
          <div className="noise-overlay" />
          
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <main className="relative z-10">
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Testimonials />
            <Services />
            <Contact />
          </main>
          <Footer />
        </SmoothScroll>
      )}
    </div>
  );
}

export default App;
