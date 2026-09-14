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
import ThreeFace3D from './components/ThreeFace3D';

const NotFound = lazy(() => import('./pages/NotFound'));

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
    <section className="h-screen w-screen bg-black text-white overflow-hidden relative flex flex-col justify-between">
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
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          src="https://cdn.sceneai.art/Hero Section Video/a8132a81-b526-4f91-8095-003ce931ecdd.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover video-fade-in"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-16 py-6 w-full">
        <div className="flex items-center flex-shrink-0 gap-3">
          <div className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-accent/30 flex items-center justify-center shadow-[0_0_15px_rgba(226,166,61,0.3)]">
            <span className="text-[0.7rem] font-bold text-accent">JT</span>
          </div>
          <span className="text-[0.95rem] font-semibold text-white tracking-wide">Jefferson Teles</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-normal text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-1"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="px-3.5 py-1.5 rounded-full text-[0.75rem] text-[#888] hover:text-white hover:bg-white/10 font-mono uppercase tracking-wider transition-all duration-300 border border-white/10"
          >
            {i18n.language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+5545999999999" className="flex items-center gap-2 text-sm font-normal text-white/70 hover:text-white transition-colors duration-200">
            <Phone size={14} className="text-accent" />
            <span>WhatsApp</span>
          </a>
          <a href="#contact" className="text-sm font-normal text-white/70 hover:text-white transition-colors duration-200">
            Contact Us
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Full-Screen Overlay Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-6 right-6 text-white p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xl font-medium text-white/80 hover:text-white transition-colors duration-200"
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
            className="text-lg font-mono text-accent"
          >
            {i18n.language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          </button>
          <a
            href="#contact"
            className="text-xl font-medium text-white/80 hover:text-white transition-colors duration-200"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}

      {/* Hero Content with 3D Holographic Face/Diamond Element */}
      <main className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center px-6 md:px-16 max-w-7xl mx-auto w-full gap-8 py-12">
        <div className="text-center lg:text-left flex-1 max-w-2xl">
          <div className="mb-4 inline-block">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-[0.8rem] text-accent font-mono shadow-[0_0_15px_rgba(226,166,61,0.2)]">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              {t('hero.role')}
            </span>
          </div>
          <h1 className="text-[48px] sm:text-[62px] font-bold leading-tight mb-6 tracking-tight">
            <WordByWord text="Jefferson Teles" delay={0.3} />
          </h1>
          <p className="text-[15px] sm:text-[17px] font-light text-white/70 mb-8 leading-relaxed" style={{ maxWidth: '46ch' }}>
            <WordByWord text="Full Stack Software Developer & Infrastructure Specialist. Building high-performance systems from foundation to finish." delay={1.0} />
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="inline-block bg-white text-black px-8 py-3.5 text-sm font-semibold rounded-xl opacity-0 hover:scale-105 active:scale-95 transition-all duration-300 spark-hover shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              style={{ animation: `fadeIn 0.6s ease forwards 1.8s` }}
            >
              {t('hero.btnWorks')}
            </a>
            <a
              href="/Curriculo_Jefferson_Teles_TI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/20 bg-white/10 backdrop-blur-md text-white px-8 py-3.5 text-sm font-medium rounded-xl opacity-0 hover:bg-white/20 active:scale-95 transition-all duration-300 spark-hover"
              style={{ animation: `fadeIn 0.6s ease forwards 2.0s` }}
            >
              {t('hero.btnResume')}
            </a>
          </div>
        </div>

        {/* Right Side: 3D Holographic Face / Diamond Element in Hero */}
        <div className="flex-1 w-full max-w-[420px] lg:max-w-[480px] h-[320px] sm:h-[400px] relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent/20 via-transparent to-blue-500/20 blur-xl opacity-70 pointer-events-none" />
          <div className="relative z-10 w-full h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-4 flex items-center justify-center shadow-2xl">
            <ThreeFace3D />
          </div>
        </div>
      </main>

      {/* Bottom subtle indicator */}
      <div className="relative z-10 pb-6 text-center">
        <a href="#about" className="inline-flex flex-col items-center text-white/40 hover:text-white transition-colors duration-300">
          <span className="text-[0.7rem] font-mono tracking-widest uppercase mb-1">Explore</span>
          <ChevronDown size={16} className="animate-bounce text-accent" />
        </a>
      </div>
    </section>
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
