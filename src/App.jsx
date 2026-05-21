import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import BootSequence from './components/BootSequence';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import FuturisticBackground from './components/FuturisticBackground';
import HUDOverlay from './components/HUDOverlay';
import SectionMetadata from './components/SectionMetadata';
import AIConsole from './components/AIConsole';
import ScrollProgress from './components/ScrollProgress';
import AutomationDashboard from './components/AutomationDashboard';
import StatusWidget from './components/StatusWidget';
import Heartbeat from './components/Heartbeat';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Clients from './sections/Clients';
import Lab from './sections/Lab';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Blog from './pages/Blog';
import { SectionProvider } from './context/SectionContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo(0, 0);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  if (!isMounted) return <div className="fixed inset-0 bg-black" />;

  return (
    <Router>
      <ScrollToTop />
      <SectionProvider>
        <div className={`relative min-h-screen transition-colors duration-700 ${isDarkMode ? 'bg-dark-bg' : 'bg-[#f0f0f0]'} text-white selection:bg-dark-accent/30 overflow-x-hidden`}>
          
          <AnimatePresence mode="wait">
            {isLoading && <BootSequence key="boot" onComplete={() => setIsLoading(false)} />}
          </AnimatePresence>

          {!isLoading && (
            <SmoothScroll>
              <FuturisticBackground />
              <CustomCursor />
              <HUDOverlay />
              <AIConsole />
              
              <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
              
              <main className="relative z-10 w-full">
                <Routes>
                  <Route path="/" element={
                    <div className="flex flex-col">
                      <Hero />
                      <SectionMetadata text="SYS_CORE // 01_ABOUT_MODULE" />
                      <About />
                      <SectionMetadata text="SYS_DATA // 02_SKILLS_MATRIX" />
                      <Skills />
                      <SectionMetadata text="SYS_EXP // 03_SELECTED_WORKS" />
                      <Projects />
                      <SectionMetadata text="SYS_AUTH // 04_TRUSTED_CLIENTS" />
                      <Clients />
                      <SectionMetadata text="SYS_R&D // 05_LAB_EXPERIMENTS" />
                      <Lab />
                      <SectionMetadata text="SYS_SERV // 06_CAPABILITIES" />
                      <Services />
                      <SectionMetadata text="SYS_COMM // 07_UPLINK_ESTABLISHED" />
                      <Contact />
                    </div>
                  } />
                  <Route path="/blog" element={<Blog />} />
                </Routes>
              </main>
              
              <Footer />

              <div className="fixed bottom-6 left-6 md:left-12 z-40 hidden md:flex flex-col gap-4">
                <Heartbeat />
                <StatusWidget />
              </div>
              <ScrollProgress />
              <AutomationDashboard />
            </SmoothScroll>
          )}
        </div>
      </SectionProvider>
    </Router>
  );
}

export default App;
