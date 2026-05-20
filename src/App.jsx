import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isStealth, setIsStealth] = useState(false);

  useEffect(() => {
    // Safety fallback: Ensure preloader closes after 10 seconds max
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    const handleStealth = (e) => setIsStealth(e.detail);
    window.addEventListener('toggle-stealth', handleStealth);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('toggle-stealth', handleStealth);
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
      <SectionProvider>
        <div className={`relative min-h-screen transition-colors duration-700 ${isDarkMode ? 'bg-[#050505] text-[#F0F1FA]' : 'bg-lusion-bg text-lusion-text'} selection:bg-lusion-primary selection:text-white`}>
          <AnimatePresence mode="wait">
            {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
          </AnimatePresence>

          {!isLoading && (
            <SmoothScroll>
              {!isStealth && <SectionCurtain />}
              <CustomCursor />
              <LusionBackground isDark={isDarkMode} isStealth={isStealth} />
              <AIConsole isStealth={isStealth} />
              
              {!isStealth && (
                <>
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
                  
                  <main className="relative z-10 w-full min-h-screen">
                    <Routes>
                      <Route path="/" element={
                        <div className="flex flex-col">
                          <Hero />
                          <About />
                          <TechStack />
                          <Projects />
                          <Clients />
                          <Lab />
                          <Services />
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
                <div className="fixed inset-0 z-50 bg-black flex flex-col p-12 font-mono text-green-500 overflow-hidden">
                  <div className="flex justify-between items-center border-b border-green-900 pb-4 mb-8">
                    <span>STEALTH_MODE_ACTIVE // BYPASS_UI_ENABLED</span>
                    <button 
                      onClick={() => setIsStealth(false)}
                      className="text-[10px] border border-green-500 px-3 py-1 hover:bg-green-500 hover:text-black transition-colors"
                    >
                      EXIT_STEALTH
                    </button>
                  </div>
                  <div className="flex-1 opacity-80 overflow-y-auto custom-scrollbar">
                    <p className="mb-4 animate-pulse"># Aguardando entrada de comando terminal...</p>
                    <p className="text-xs text-green-800 leading-relaxed">
                      JeffersonTeles@Portfolio:~$ System access granted.<br/>
                      JeffersonTeles@Portfolio:~$ Kernel version: 5.15.0-76-generic<br/>
                      JeffersonTeles@Portfolio:~$ Memory: 32GB LPDDR5<br/>
                      JeffersonTeles@Portfolio:~$ Neural Engine: Active [v4.0.2]<br/>
                      JeffersonTeles@Portfolio:~$ Loading modules... OK<br/>
                      JeffersonTeles@Portfolio:~$ All security protocols bypassed.<br/>
                    </p>
                  </div>
                </div>
              )}
            </SmoothScroll>
          )}
        </div>
      </SectionProvider>
    </Router>
  );
}

export default App;
