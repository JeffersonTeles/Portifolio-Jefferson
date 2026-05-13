import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Grade holográfica 3D */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ff1_1px,transparent_1px),linear-gradient(to_bottom,#0ff1_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_20%,transparent_100%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Cpath fill="%230ff" fill-opacity="0.05" d="M10 10 L90 10 M10 20 L90 20 M10 30 L90 30 M10 40 L90 40 M10 50 L90 50 M10 60 L90 60 M10 70 L90 70 M10 80 L90 80 M10 90 L90 90 M20 10 L20 90 M30 10 L30 90 M40 10 L40 90 M50 10 L50 90 M60 10 L60 90 M70 10 L70 90 M80 10 L80 90 M90 10 L90 90"%2F%3E%3C%2Fsvg%3E')] opacity-10" />
      </div>
      
      {/* Bolhas de energia neon */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-pulse" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-pulse delay-1000" />
      <div className="fixed top-1/2 left-1/2 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse delay-500" />
      
      {/* Scanner line animada */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-scan z-50" />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
