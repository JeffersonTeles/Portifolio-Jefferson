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

function ImpactSection() {
  const impactItems = [
    { value: '6+', label: 'Anos em TI' },
    { value: '8', label: 'Tickets/dia' },
    { value: '3', label: 'Projetos' },
    { value: '100%', label: 'Uptime' },
  ];

  return (
    <section className="py-16 border-t border-white/[0.04] bg-[#0a0a0a]/50">
      <div className="max-w-[700px] mx-auto px-6">
        <h3 className="text-[0.7rem] text-[#555] font-mono uppercase tracking-[0.25em] text-center mb-8">
          Números que importam
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactItems.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-[2.5rem] font-bold text-accent mb-1">{item.value}</div>
              <div className="text-[0.7rem] text-[#777] font-mono uppercase tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
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

      {/* Background melhorado */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div
          className="absolute inset-0 opacity-30 animate-gradient-bg"
          style={{
            background: 'linear-gradient(135deg, rgba(226,166,61,0.06) 0%, rgba(110,231,183,0.04) 30%, rgba(147,197,253,0.03) 60%, rgba(226,166,61,0.05) 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-[15%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/30 pointer-events-none" />
      </div>

      <Navbar />

      <main id="main-content" className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center px-6 md:px-16 max-w-7xl mx-auto w-full gap-8 pt-20 pb-8 lg:pt-16">
        <div className="text-center lg:text-left flex-1 max-w-2xl">
          <div className="mb-4 inline-block">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-[0.8rem] text-accent font-mono shadow-[0_0_15px_rgba(226,166,61,0.2)]">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              {t('hero.role')}
            </span>
          </div>
          <h1 className="text-[42px] sm:text-[56px] font-bold leading-tight mb-4 tracking-tight text-white">
            <WordByWord text={t('hero.title1')} delay={0.3} />
          </h1>
          <p className="text-[15px] sm:text-[17px] font-light text-white/70 mb-8 leading-relaxed" style={{ maxWidth: '46ch' }}>
            <WordByWord text={t('hero.tagline')} delay={1.0} />
          </p>
          <p className="text-[0.85rem] text-[#666] mb-6">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="inline-block bg-white text-black px-8 py-3.5 text-sm font-semibold rounded-xl opacity-0 hover:scale-105 active:scale-95 transition-all duration-300 spark-hover shadow-[0_0_20px_rgba(255,255,255,0.3)] focus-visible:ring-2 focus-visible:ring-accent"
              style={{ animation: `fadeIn 0.6s ease forwards 1.6s` }}
            >
              {t('hero.btnWorks')}
            </a>
            <a
              href="/Curriculo_Jefferson_Teles_TI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/20 bg-white/10 backdrop-blur-md text-white px-8 py-3.5 text-sm font-medium rounded-xl opacity-0 hover:bg-white/20 active:scale-95 transition-all duration-300 spark-hover focus-visible:ring-2 focus-visible:ring-accent"
              style={{ animation: `fadeIn 0.6s ease forwards 1.9s` }}
            >
              {t('hero.btnResume')}
            </a>
            <a
              href="#contact"
              className="inline-block border border-accent/30 text-accent px-8 py-3.5 text-sm font-medium rounded-xl opacity-0 hover:bg-accent/10 active:scale-95 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent"
              style={{ animation: `fadeIn 0.6s ease forwards 2.2s` }}
            >
              {t('contact.getInTouch') || 'Fale comigo'}
            </a>
          </div>
        </div>
      </main>

       <div className="relative z-10 pb-6 text-center flex-shrink-0">
         <a href="#about" className="block text-[0.7rem] font-mono tracking-widest uppercase text-white/40 hover:text-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent mb-2 sm:hidden">
           {t('hero.explore')}
         </a>
         <a href="#about" className="hidden sm:flex sm:inline-flex sm:flex-col sm:items-center text-white/40 hover:text-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent">
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
      <ImpactSection />
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
