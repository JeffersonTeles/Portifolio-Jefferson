import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const NotFound = lazy(() => import('./pages/NotFound'));

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Certifications />
      <Contact />
    </>
  );
}

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen bg-[#050505] text-white">
          <Navbar />
          <main>
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center text-[#ccc]">
                  Carregando...
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <BackToTop />
          <div className="copy-toast" aria-live="polite">
            {t('contact.copied', 'Copiado!')}
          </div>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
