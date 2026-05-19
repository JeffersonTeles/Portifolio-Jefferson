import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';
import LusionBackground from './components/LusionBackground';
import AIConsole from './components/AIConsole';
import ScrollProgress from './components/ScrollProgress';
import SpatialAudio from './components/SpatialAudio';
import SectionCurtain from './components/SectionCurtain';
import AutomationDashboard from './components/AutomationDashboard';
import StatusWidget from './components/StatusWidget';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Clients from './sections/Clients';
import Lab from './sections/Lab';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { SectionProvider } from './context/SectionContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <SectionProvider>
      <div className={`relative min-h-screen transition-colors duration-700 ${isDarkMode ? 'bg-[#050505] text-[#F0F1FA]' : 'bg-lusion-bg text-lusion-text'} selection:bg-lusion-primary selection:text-white`}>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

        {!isLoading && (
          <SmoothScroll>
            <SectionCurtain />
            <CustomCursor />
            <LusionBackground isDark={isDarkMode} />
            <AIConsole />
            <ScrollProgress />
            <AutomationDashboard />
            <SpatialAudio isMuted={isMuted} />
            
            <div className="fixed bottom-6 left-6 md:left-12 z-40 hidden md:block">
              <StatusWidget />
            </div>

            <div className="noise-overlay" />
            
            <Navbar 
              toggleTheme={toggleTheme} 
              isDarkMode={isDarkMode} 
              toggleMute={toggleMute} 
              isMuted={isMuted} 
            />
            
            <main className="relative z-10 w-full overflow-hidden">
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
    </SectionProvider>
  );
}

export default App;
