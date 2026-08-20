import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const NotFound = lazy(() => import("./pages/NotFound"));

function HomePage() {
  return (
    <>
      <Hero />
      <div className="amber-divider" />
      <About />
      <Experience />
      <div className="amber-divider" />
      <Projects />
      <TechStack />
      <div className="amber-divider" />
      <Certifications />
      <Contact />
    </>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".slide").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen bg-[#0a0a0a]">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="*"
                element={
                  <Suspense
                    fallback={
                      <div className="min-h-screen flex items-center justify-center text-[#333]">
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
          <BackToTop />
          <div className="copy-toast" aria-live="polite">Copied!</div>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
