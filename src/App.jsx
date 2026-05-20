import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import FuturisticBackground from './components/FuturisticBackground';
import HUDOverlay from './components/HUDOverlay';
import SectionMetadata from './components/SectionMetadata';
import AIConsole from './components/AIConsole';
import ScrollProgress from './components/ScrollProgress';
import SpatialAudio from './components/SpatialAudio';
import SectionCurtain from './components/SectionCurtain';
import AutomationDashboard from './components/AutomationDashboard';
import StatusWidget from './components/StatusWidget';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/TechStack';
import Projects from './sections/Projects';
import Clients from './sections/Clients';
import Lab from './sections/Lab';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Blog from './pages/Blog';
import TerminalMode from './components/TerminalMode';
import { SectionProvider } from './context/SectionContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isStealth, setIsStealth] = useState(false);
  const [isTerminal, setIsTerminal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleStealth = (e) => setIsStealth(e.detail);
    const handleTerminal = (e) => setIsTerminal(e.detail);
    
    window.addEventListener('toggle-stealth', handleStealth);
    window.addEventListener('toggle-terminal', handleTerminal);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('toggle-stealth', handleStealth);
      window.removeEventListener('toggle-terminal', handleTerminal);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary>
        <SectionProvider>
          <div className={`relative min-h-screen transition-colors duration-700 bg-dark-bg text-white selection:bg-dark-accent/30 selection:text-dark-accent overflow-x-hidden`}>
            <AnimatePresence mode="wait">
              {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            {!isLoading && (
              <SmoothScroll>
                {!isStealth && <SectionCurtain />}
                <CustomCursor />
                
                <FuturisticBackground isDark={isDarkMode} />
                {!isStealth && <HUDOverlay />}
                
                <AIConsole isStealth={isStealth} />
                
                {!isStealth && (
                  <>
                    <ScrollProgress />
                    <AutomationDashboard />
                    <SpatialAudio isMuted={isMuted} />
                    
                    <div className="fixed bottom-6 left-6 md:left-12 z-40 hidden md:block">
                      <StatusWidget />
                    </div>

                    <Navbar 
                      toggleTheme={toggleTheme} 
                      isDarkMode={isDarkMode} 
                      toggleMute={toggleMute} 
                      isMuted={isMuted} 
                    />
                    
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
                  </>
                )}

                {isStealth && (
                  <div className="fixed inset-0 z-50 bg-black flex flex-col p-12 font-mono text-dark-terminal overflow-hidden">
                    <div className="flex justify-between items-center border-b border-dark-terminal/20 pb-4 mb-8">
                      <span className="animate-pulse">STEALTH_MODE_ACTIVE // BYPASS_UI_ENABLED</span>
                      <button 
                        onClick={() => setIsStealth(false)}
                        className="text-[10px] border border-dark-terminal px-3 py-1 hover:bg-dark-terminal hover:text-black transition-colors"
                      >
                        EXIT_STEALTH
                      </button>
                    </div>
                    <div className="flex-1 opacity-80 overflow-y-auto custom-scrollbar">
                      <p className="mb-4 text-dark-terminal/40"># Aguardando entrada de comando terminal...</p>
                      <p className="text-xs leading-relaxed">
                        JeffersonTeles@Portfolio:~$ System access granted.<br/>
                        JeffersonTeles@Portfolio:~$ Kernel version: 5.15.0-76-generic<br/>
                        JeffersonTeles@Portfolio:~$ Memory: 32GB LPDDR5<br/>
                        JeffersonTeles@Portfolio:~$ Neural Engine: Active [v4.0.2]<br/>
                        JeffersonTeles@Portfolio:~$ <span className="animate-pulse">_</span>
                      </p>
                    </div>
                  </div>
                )}
              </SmoothScroll>
            )}

            {isTerminal && <TerminalMode onClose={() => setIsTerminal(false)} />}
          </div>
        </SectionProvider>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
