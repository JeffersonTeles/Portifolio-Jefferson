import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MotionConfig } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
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
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0a0a0a]">
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
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-bg {
          background-size: 200% 200%;
          animation: gradientShift 15s ease infinite;
        }
      `}</style>

      {/* Background com CSS gradients — sem vídeo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Camada base escura */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />

        {/* Gradientes animados sutis */}
        <div
          className="absolute inset-0 opacity-30 animate-gradient-bg"
          style={{
            background: 'linear-gradient(135deg, rgba(226,166,61,0.06) 0%, rgba(110,231,183,0.04) 30%, rgba(147,197,253,0.03) 60%, rgba(226,166,61,0.05) 100%)',
          }}
        />

        {/* Grid pattern sutil */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow centers */}
        <div className="absolute top-[15%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/30 pointer-events-none" />
      </div>

      {/* Navbar unificado */}
      <Navbar />

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-16 max-w-7xl mx-auto w-full gap-8 pt-16 pb-8">
        <div className="text-center lg:text-left flex-1 max-w-2xl">
          <h1 className="text-[42px] sm:text-[56px] font-bold leading-tight mb-4 tracking-tight text-white">
            <WordByWord text={t('hero.title1')} delay={0.3} />
          </h1>
          <p className="text-[14px] sm:text-[16px] font-light text-white/60 mb-8 leading-relaxed" style={{ maxWidth: '46ch' }}>
            <WordByWord text={t('hero.tagline')} delay={1.0} />
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
      </main>

      {/* Bottom indicator */}
      <div className="relative z-10 pb-6 text-center flex-shrink-0">
        <a href="#about" className="inline-flex flex-col items-center text-white/40 hover:text-white transition-colors duration-300">
          <span className="text-[0.7rem] font-mono tracking-widest uppercase mb-1">{t('hero.explore')}</span>
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
