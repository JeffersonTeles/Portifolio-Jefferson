import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MotionConfig } from 'framer-motion';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import Certifications from './sections/Certifications';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const NotFound = lazy(() => import('./pages/NotFound'));

const logoSvg = (
  <svg fill="currentColor" height="32" viewBox="0 0 145 48" width="96" xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor">
      <path clipRule="evenodd" d="m15.2286 4.99951c-3.2154 0-6.18655 1.71539-7.79425 4.5l-5.7735 9.99999c-1.6076941 2.7846-1.607697 6.2154 0 9l5.7735 10c1.6077 2.7846 4.57885 4.5 7.79425 4.5h11.547c3.2154 0 6.1865-1.7154 7.7942-4.5l5.7735-10c1.6077-2.7846 1.6077-6.2154 0-9l-5.7735-9.99999c-1.6077-2.78461-4.5788-4.5-7.7942-4.5zm11.547 5.99999h-7.2169c-1.1547 0-1.8762 1.2499-1.298 2.2494 1.784 3.0838 3.5722 6.1653 5.3536 9.2506.5359.9282.5359 2.0718 0 3-1.7814 3.0854-3.5696 6.1668-5.3536 9.2506-.5782.9995.1433 2.2494 1.298 2.2494h7.2169c1.0718 0 2.0622-.5718 2.5981-1.5l5.7735-10c.5359-.9282.5359-2.0718 0-3l-5.7735-10c-.5359-.9282-1.5263-1.5-2.5981-1.5z" fillRule="evenodd"/>
      <path d="m66.983 20.526h-4.536c-.513-1.809-1.809-2.781-3.645-2.781-2.781 0-4.374 2.322-4.374 6.102 0 3.807 1.566 6.048 4.374 6.048 1.728 0 3.078-.918 3.591-2.646h4.59c-.945 4.05-4.212 6.183-8.127 6.183-5.481 0-8.856-3.645-8.856-9.585s3.375-9.639 8.91-9.639c3.942 0 7.29 2.133 8.073 6.318z"/>
      <path d="m75.1442 33.432c-4.401 0-7.128-2.916-7.128-7.695 0-4.941 2.808-7.722 7.128-7.722 4.401 0 7.155 2.97 7.155 7.722 0 4.914-2.835 7.695-7.155 7.695zm0-3.348c1.917 0 2.916-1.512 2.916-4.347 0-2.808-1.026-4.374-2.916-4.374s-2.889 1.539-2.889 4.374c0 2.808 1.026 4.347 2.889 4.347z"/>
      <path d="m83.9439 33v-14.526h4.1309v2.025c.918-1.728 2.3221-2.484 3.8071-2.484.594 0 1.134.162 1.431.459v3.483c-.486-.108-.999-.162-1.647-.162-2.484 0-3.5911 1.404-3.5911 3.699v7.506z"/>
      <path d="m107.851 28.221c-.756 3.348-3.456 5.211-7.02 5.211-4.5093 0-7.2903-2.916-7.2903-7.695 0-4.941 2.808-7.722 7.1283-7.722 4.347 0 7.074 2.889 7.074 7.641v.918h-9.9903c.216 2.322 1.296 3.564 3.0783 3.564 1.35 0 2.268-.594 2.7-1.917zm-7.182-6.912c-1.5393 0-2.5113.999-2.8353 2.889h5.6433c-.324-1.89-1.296-2.889-2.808-2.889z"/>
      <path d="m118.324 33.432c-5.697 0-9.207-3.672-9.207-9.585 0-5.94 3.51-9.639 9.207-9.639 5.67 0 9.18 3.699 9.18 9.639 0 5.913-3.51 9.585-9.18 9.585zm0-3.537c2.997 0 4.752-2.268 4.752-6.048s-1.755-6.102-4.752-6.102c-3.024 0-4.779 2.295-4.779 6.102 0 3.78 1.755 6.048 4.779 6.048z"/>
      <path d="m133.466 19.365c0 3.915 10.8.594 10.8 8.1 0 3.78-3.132 5.967-7.425 5.967-4.347 0-7.452-1.998-8.1-6.183h4.563c.351 1.809 1.62 2.808 3.564 2.808s2.97-.783 2.97-2.052c0-4.104-10.827-.972-10.827-8.235 0-3.078 2.565-5.562 7.074-5.562 3.807 0 7.101 1.809 7.668 6.048h-4.617c-.378-1.809-1.431-2.673-3.213-2.673-1.512 0-2.457.702-2.457 1.782z"/>
    </g>
  </svg>
);

function WordByWord({ text, delay, className }) {
  const words = text.split(' ');
  return (
    <div className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block opacity-0 transform translate-y-6"
          style={{
            animation: `fadeSlideUp 0.8s ease forwards ${delay + i * 0.08}s`,
          }}
        >
          {word}{' '}
        </span>
      ))}
    </div>
  );
}

function PromptHeroSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');
  };

  const navLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-hidden relative">
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes videoFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .video-fade-in {
          animation: videoFadeIn 1.5s ease forwards;
        }
      `}</style>

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://cdn.sceneai.art/Hero Section Video/a8132a81-b526-4f91-8095-003ce931ecdd.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover video-fade-in"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-5">
        <div className="flex items-center flex-shrink-0 gap-3">
          <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center">
            <span className="text-[0.65rem] font-bold text-accent">JT</span>
          </div>
          <span className="text-[0.9rem] font-semibold text-white">Jefferson Teles</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-normal text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-1"
            >
              {link.label}
              {['Solutions', 'Resources', 'Solutions'].includes(link.label) && (
                <ChevronDown size={14} className="text-white/50" />
              )}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-full text-[0.75rem] text-[#666] hover:text-white hover:bg-white/5 font-mono uppercase tracking-wider transition-all duration-300"
          >
            {i18n.language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+5545999999999" className="flex items-center gap-2 text-sm font-normal text-white/70 hover:text-white transition-colors duration-200">
            <Phone size={14} />
            <span>WhatsApp</span>
          </a>
          <a href="#contact" className="text-sm font-normal text-white/70 hover:text-white transition-colors duration-200">
            Contact Us
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Full-Screen Overlay Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-5 right-6 text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-normal text-white/70 hover:text-white transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              toggleLanguage();
              setMobileOpen(false);
            }}
            className="text-lg font-normal text-white/70 hover:text-white transition-colors duration-200 font-mono"
          >
            {i18n.language === 'pt' ? 'English' : 'Português'}
          </button>
          <a
            href="#contact"
            className="text-lg font-normal text-white/70 hover:text-white transition-colors duration-200"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}

      {/* Hero Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-[0.75rem] text-accent font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              {t('hero.role')}
            </span>
          </div>
          <h1 className="text-[62px] font-bold leading-tight mb-6 tracking-tight">
            <WordByWord text="Jefferson Teles" delay={0.5} />
          </h1>
          <p className="text-[15px] font-light text-white/70 mb-10 leading-relaxed mx-auto" style={{ maxWidth: '42ch' }}>
            <WordByWord text="High-quality software solutions and robust infrastructure for every project, from foundation to finish." delay={1.4} />
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-block bg-white text-black px-8 py-3 text-sm font-medium rounded-lg opacity-0 hover:scale-105 active:scale-95 transition-all duration-300"
              style={{ animation: `fadeIn 0.6s ease forwards 2.5s` }}
            >
              {t('hero.btnWorks')}
            </a>
            <a
              href="/Curriculo_Jefferson_Teles_TI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/20 bg-white/10 backdrop-blur-md text-white px-8 py-3 text-sm font-medium rounded-lg opacity-0 hover:bg-white/20 active:scale-95 transition-all duration-300"
              style={{ animation: `fadeIn 0.6s ease forwards 2.7s` }}
            >
              {t('hero.btnResume')}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <PromptHeroSection />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Certifications />
      <Blog />
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
    <MotionConfig reducedMotion="user">
      <Router>
        <ErrorBoundary>
          <div className="min-h-screen bg-[#0a0a0a] text-white">
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
            <div className="copy-toast" aria-live="polite">
              {t('contact.copied', 'Copiado!')}
            </div>
          </div>
        </ErrorBoundary>
      </Router>
    </MotionConfig>
  );
}

export default App;
