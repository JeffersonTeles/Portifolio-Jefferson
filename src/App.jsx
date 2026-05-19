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
import Clients from './sections/Clients';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('pt');

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Feature #10: Language Detection
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'en') {
      setLanguage('en');
      // In a real i18n setup, we would trigger i18next changeLanguage here
      window.dispatchEvent(new CustomEvent('ai-log', { 
        detail: "English detected. Ready for global reach." 
      }));
    }
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
            <Clients />
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
