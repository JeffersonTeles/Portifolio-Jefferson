import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import SkipLink from "./components/SkipLink";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/TechStack";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CyberGridBackground from "./components/CyberGridBackground";
import GradientWarpTransition from "./components/GradientWarpTransition";

const NotFound = lazy(() => import("./pages/NotFound"));

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans">
        <CyberGridBackground />
        <GradientWarpTransition />
        <SkipLink />
        <Navbar />
        <main
          id="main-content"
          className="relative z-10 w-full"
          tabIndex={-1}
          aria-label="Conteúdo principal"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="*"
              element={
                <Suspense
                  fallback={
                    <div className="min-h-screen flex items-center justify-center text-white/50">
                      Carregando...
                    </div>
                  }
                >
                  <NotFound />
                </Suspense>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
