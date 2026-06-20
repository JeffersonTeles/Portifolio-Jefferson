import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { scroller } from "react-scroll";
import Lenis from "lenis";

// Core components
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import CommandPalette from "./components/CommandPalette";
import CustomContextMenu from "./components/CustomContextMenu";
import ShaderTransition from "./components/ShaderTransition";
import GhostLogs from "./components/GhostLogs";
// TimeTravelControl removed — year state has no effect on displayed content
import LusionBackground from "./components/LusionBackground";
import HolographicOverlay from "./components/HolographicOverlay";
import AmbientAudio from "./components/AmbientAudio";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import SectionIndicator from "./components/SectionIndicator";

// New interactive components
import FloatingCTA from "./components/FloatingCTA";
import BackToTop from "./components/BackToTop";
import SpotlightCursor from "./components/SpotlightCursor";
import ToastContainer from "./components/Toast";
import EasterEgg from "./components/EasterEgg";
import ContactModal from "./components/ContactModal";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Skills from "./sections/TechStack";
import Lab from "./sections/Lab";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Testimonials from "./sections/Testimonials";

// Pages
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import ProjectPage from "./pages/ProjectPage";

// Section Provider
import { SectionProvider, useSection } from "./context/SectionContext";

const SECTIONS = [
  "hero",
  "about",
  "projects",
  "services",
  "skills",
  "lab",
  "contact",
];

function AppContent({ isDarkMode, toggleTheme }) {
  const { setScrollVelocity, currentSection } = useSection();
  const [isCTAModalOpen, setIsCTAModalOpen] = useState(false);

  // Lenis smooth scroll
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

  // Keyboard navigation (arrow keys)
  useEffect(() => {
    const handler = (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      const idx = SECTIONS.indexOf(currentSection);
      if (e.key === "ArrowDown" && idx < SECTIONS.length - 1) {
        e.preventDefault();
        scroller.scrollTo(SECTIONS[idx + 1], {
          smooth: true,
          duration: 900,
          offset: -100,
        });
      } else if (e.key === "ArrowUp" && idx > 0) {
        e.preventDefault();
        scroller.scrollTo(SECTIONS[idx - 1], {
          smooth: true,
          duration: 900,
          offset: -100,
        });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [currentSection]);

  // Swipe gestures (mobile)
  useEffect(() => {
    let touchStartY = 0;
    const onTouchStart = (e) => {
      touchStartY = e.targetTouches[0].clientY;
    };
    const onTouchEnd = (e) => {
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 80) return;
      const idx = SECTIONS.indexOf(currentSection);
      if (diff > 0 && idx < SECTIONS.length - 1) {
        scroller.scrollTo(SECTIONS[idx + 1], {
          smooth: true,
          duration: 900,
          offset: -100,
        });
      } else if (diff < 0 && idx > 0) {
        scroller.scrollTo(SECTIONS[idx - 1], {
          smooth: true,
          duration: 900,
          offset: -100,
        });
      }
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [currentSection]);

  return (
    <div
      className={`relative min-h-screen bg-black text-white selection:bg-white/10 selection:text-white overflow-hidden font-sans ${!isDarkMode ? "theme-light" : ""}`}
    >
      {/* Ambient / background layers */}
      <SpotlightCursor />
      <GhostLogs />
      <HolographicOverlay />
      <AmbientAudio />
      <ShaderTransition />

      {/* Navigation & UI */}
      <ScrollProgress />
      <SectionIndicator />
      <BackToTop />
      <EasterEgg />
      <ToastContainer />
      <FloatingCTA onClick={() => setIsCTAModalOpen(true)} />
      <ContactModal
        isOpen={isCTAModalOpen}
        onClose={() => setIsCTAModalOpen(false)}
      />

      {/* Grain filter */}
      <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <LusionBackground isDark={true} isStealth={false} />
      <CustomCursor />
      <CustomContextMenu />
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
                <Certifications />
                <Lab />
                <Contact />
              </div>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projeto/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
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
