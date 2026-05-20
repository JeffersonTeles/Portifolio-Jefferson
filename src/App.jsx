import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import FuturisticBackground from './components/FuturisticBackground';
import HUDOverlay from './components/HUDOverlay';
import SectionMetadata from './components/SectionMetadata';
import AIConsole from './components/AIConsole';
import ScrollProgress from './components/ScrollProgress';
import SectionCurtain from './components/SectionCurtain';
import AutomationDashboard from './components/AutomationDashboard';
import StatusWidget from './components/StatusWidget';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
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
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isStealth, setIsStealth] = useState(false);
  const [isTerminal, setIsTerminal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleStealth = (e) => setIsStealth(e.detail);
    const handleTerminal = (e) => setIsTerminal(e.detail);
    
    window.addEventListener('toggle-stealth', handleStealth);
    window.addEventListener('toggle-terminal', handleTerminal);
    
    return () => {
      window.removeEventListener('toggle-stealth', handleStealth);
      window.removeEventListener('toggle-terminal', handleTerminal);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  if (!isMounted) return null;

  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary>
        <SectionProvider>
          <div className="relative min-h-screen bg-[#0a0a0f] text-white selection:bg-dark-accent/30 overflow-x-hidden">
            <SectionCurtain />
            <CustomCursor />
            
            <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
              <FuturisticBackground />
            </Suspense>

            {!isStealth && <HUDOverlay />}
            <AIConsole isStealth={isStealth} />
            
            {!isStealth && (
              <>
                <ScrollProgress />
                <AutomationDashboard />
                
                <div className="fixed bottom-6 left-6 md:left-12 z-40 hidden md:block">
                  <StatusWidget />
                </div>

                <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} isMuted={true} />
                
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
              <div className="fixed inset-0 z-50 bg-black flex flex-col p-12 font-mono text-dark-terminal">
                <div className="flex justify-between items-center border-b border-dark-terminal/20 pb-4 mb-8">
                  <span>STEALTH_MODE_ACTIVE</span>
                  <button onClick={() => setIsStealth(false)} className="px-3 py-1 border border-dark-terminal uppercase text-[10px]">Exit</button>
                </div>
                <p># Security Bypass Active. Root access granted.</p>
              </div>
            )}

            {isTerminal && <TerminalMode onClose={() => setIsTerminal(false)} />}
          </div>
        </SectionProvider>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
