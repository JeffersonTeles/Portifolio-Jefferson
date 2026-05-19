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
import Lab from './sections/Lab';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import useSound from 'use-sound';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('pt');
  
  // Feature #1: Sound Design (Subtle UI sounds)
  const [playHover] = useSound('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', { volume: 0.1 });
  const [playClick] = useSound('https://assets.mixkit.co/active_storage/sfx/2568/2571-preview.mp3', { volume: 0.2 });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Feature #10: Language Detection
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'en') {
      setLanguage('en');
      window.dispatchEvent(new CustomEvent('ai-log', { 
        detail: "English detected. Ready for global reach." 
      }));
    }

    const handleGlobalClick = () => {
      // Logic for global click sound if needed
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div 
      onMouseMove={() => {}} // Placeholder for future sound triggers
      className={`relative min-h-screen transition-colors duration-700 ${isDarkMode ? 'bg-[#050505] text-[#F0F1FA]' : 'bg-lusion-bg text-lusion-text'} selection:bg-lusion-primary selection:text-white overflow-x-hidden`}
    >
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
            <Lab />
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
