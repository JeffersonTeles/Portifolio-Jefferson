import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MotionConfig } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';
import SkipLink from './components/SkipLink';
import DarkModeToggle from './components/DarkModeToggle';
import SparkButton from './components/SparkButton';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const NotFound = lazy(() => import('./pages/NotFound'));

function WordByWord({ text, delay, className }) {
  const words = text.split(' ');
  return (
    <span className={className}>
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
    </span>
  );
}

function PromptHeroSection() {
  const { t } = useTranslation();

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jefferson Teles",
    "url": "https://portifolio-jefferson-phi.vercel.app",
    "image": "https://portifolio-jefferson-phi.vercel.app/og-image.png",
    "jobTitle": t('hero.role'),
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Centro Universitário FAG",
      "url": "https://www.fag.edu.br"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cascavel",
      "addressRegion": "Paraná",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://github.com/JeffersonTeles",
      "https://linkedin.com/in/jeffersonteles"
    ]
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0a0a0a] scroll-margin-top-20">
      <Helmet>
        <title>{t('hero.title1')} — FullStack Developer & Infraestrutura</title>
        <meta name="description" content={t('hero.subtitle')} />
        <meta property="og:title" content={t('hero.title1')} />
        <meta property="og:description" content={t('hero.tagline')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portifolio-jefferson-phi.vercel.app/" />
        <meta property="og:image" content="https://portifolio-jefferson-phi.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('hero.title1')} />
        <meta name="twitter:description" content={t('hero.tagline')} />
        <meta name="twitter:image" content="https://portifolio-jefferson-phi.vercel.app/og-image.png" />
        <link rel="canonical" href="https://portifolio-jefferson-phi.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes sparkOrbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(28px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(28px) rotate(-360deg); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .spark-flash {
          position: relative;
        }
        .spark-flash::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: inherit;
          border: 1.5px solid rgba(226,166,61,0.15);
          box-shadow:
            0 0 15px rgba(226,166,61,0.3),
            0 0 30px rgba(226,166,61,0.15),
            inset 0 0 15px rgba(226,166,61,0.05);
          animation: glowPulse 3s ease-in-out infinite;
          pointer-events: none;
          z-index: -1;
        }
        .spark-flash::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 6px;
          height: 6px;
          margin-top: -3px;
          margin-left: -3px;
          background: #e2a63d;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(226,166,61,0.8), 0 0 15px rgba(226,166,61,0.5), 0 0 25px rgba(226,166,61,0.3);
          z-index: 10;
          pointer-events: none;
          animation: sparkOrbit 3s linear infinite;
        }
        .spark-flash:hover::after {
          background: #ff6b35;
          box-shadow: 0 0 12px rgba(255,107,53,0.9), 0 0 20px rgba(255,107,53,0.6), 0 0 35px rgba(255,107,53,0.4);
          animation-duration: 1.5s;
        }
      `}</style>

      {/* Background limpo e minimalista */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-cyan-500/[0.02]" />
        <div className="absolute inset-0 opacity-[0.012] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-[15%] left-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-[#0a0a0a]/40 pointer-events-none" />
      </div>

      <Navbar />

      <main id="main-content" className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center px-6 md:px-16 max-w-7xl mx-auto w-full gap-8 pt-[100px] pb-8 lg:pt-[140px]">
        <div className="text-center lg:text-left flex-1 max-w-2xl">
          {/* Badge de role - sem piscar, apenas borda sutil */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-[0.75rem] text-accent font-mono tracking-wide shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {t('hero.role')}
            </span>
          </div>

          {/* Nome com fonte melhorada */}
          <h1 className="text-[44px] sm:text-[58px] font-sans font-bold leading-[1.05] mb-5 tracking-tight text-white">
            <WordByWord text={t('hero.title1')} delay={0.3} />
          </h1>

          {/* Tagline - separado do subtitle */}
          <p className="text-[15px] sm:text-[17px] font-medium text-white/75 mb-6 leading-relaxed" style={{ maxWidth: '48ch' }}>
            <WordByWord text={t('hero.tagline')} delay={1.0} />
          </p>

          {/* Subtitle - informações adicionais */}
          <p className="text-[0.8rem] text-[#666] mb-8 max-w-xl leading-relaxed border-l-2 border-accent/20 pl-4">
            {t('hero.subtitle')}
          </p>

          {/* Botões */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <SparkButton href="#projects">
              {t('hero.btnWorks')}
            </SparkButton>
            <SparkButton href="/Curriculo_Jefferson_Teles_TI.pdf" target="_blank" rel="noopener noreferrer">
              {t('hero.btnResume')}
            </SparkButton>
            <SparkButton href="#contact">
              {t('contact.getInTouch') || 'Fale comigo'}
            </SparkButton>
          </div>
        </div>
      </main>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-6 text-center flex-shrink-0">
        <a href="#about" className="block text-[0.7rem] font-mono tracking-widest uppercase text-white/40 hover:text-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent mb-2 sm:hidden">
          {t('hero.explore')}
        </a>
        <a href="#about" className="hidden sm:flex sm:inline-flex sm:items-center text-white/40 hover:text-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent">
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
      <SkipLink />
      <ScrollProgress />
      <DarkModeToggle />
      <PromptHeroSection />
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
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <Router>
          <ErrorBoundary>
            <div className="min-h-screen bg-[#0a0a0a] text-white">
              <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#0a0a0a" />
                <link rel="icon" type="image/png" href="/pwa-192x192.png" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
              </Helmet>
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
    </HelmetProvider>
  );
}

export default App;
