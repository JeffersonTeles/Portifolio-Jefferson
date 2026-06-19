import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis";

// Premium Striking Components
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import CommandPalette from "./components/CommandPalette";
import CustomContextMenu from "./components/CustomContextMenu";
import ShaderTransition from "./components/ShaderTransition";
import GhostLogs from "./components/GhostLogs";
import TimeTravelControl from "./components/TimeTravelControl";
import LusionBackground from "./components/LusionBackground";
import HolographicOverlay from "./components/HolographicOverlay";
import AmbientAudio from "./components/AmbientAudio";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Skills from "./sections/TechStack";
import Lab from "./sections/Lab";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Testimonials from "./sections/Testimonials";

// Pages
import Blog from "./pages/Blog";

// Section Provider
import { SectionProvider, useSection } from "./context/SectionContext";

function AppContent({ isDarkMode, toggleTheme }) {
  const { setScrollVelocity } = useSection();

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      setScrollVelocity(lenis.velocity);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, [setScrollVelocity]);

  return (
    <div
      className={`relative min-h-screen bg-black text-white selection:bg-white/10 selection:text-white overflow-hidden font-sans ${!isDarkMode ? "theme-light" : ""}`}
    >
      <GhostLogs />
      <HolographicOverlay />
      <AmbientAudio />
      <ShaderTransition />
      <ScrollProgress />

      {/* Visual Refinement: Grain Filter */}
      <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <LusionBackground isDark={true} isStealth={false} />
      <CustomCursor />
      <CustomContextMenu />
      <TimeTravelControl />
      <CommandPalette isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      <main className="relative z-10 w-full">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col">
                <Hero />
                <Testimonials />
                <About />
                <div data-xray="true">
                  <Projects />
                </div>
                <Services />
                <div data-xray="true">
                  <Skills />
                </div>
                <Lab />
                <Contact />
              </div>
            }
          />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

      <Footer />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.01] rounded-full blur-[120px]" />
      </div>
    </div>
  );
}

function App() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="fixed inset-0 bg-black" />;

  return (
    <Router>
      <ScrollToTop />
      <SectionProvider>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
          ) : (
            <AppContent
              key="app"
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme}
            />
          )}
        </AnimatePresence>
      </SectionProvider>
    </Router>
  );
}

export default App;
