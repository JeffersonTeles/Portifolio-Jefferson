import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import SkipLink from "./components/SkipLink";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const NotFound = lazy(() => import("./pages/NotFound"));

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans">
        <SkipLink />
        <Navbar />
        <main
          id="main-content"
          className="relative z-10"
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
