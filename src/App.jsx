import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
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
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <TechStack />
      </div>
      <div id="certifications">
        <Certifications />
      </div>
      <div id="contact">
        <Contact />
      </div>
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
        <div className="copy-toast">Copied!</div>
      </div>
    </Router>
  );
}

export default App;
