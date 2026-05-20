import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/TechStack';
import Projects from './sections/Projects';
import Clients from './sections/Clients';
import Lab from './sections/Lab';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#0a0a0f] text-white selection:bg-dark-accent/30 overflow-x-hidden">
        <CustomCursor />
        
        <Navbar toggleTheme={() => {}} isDarkMode={true} isMuted={true} />
        
        <main className="relative z-10 w-full">
          <Routes>
            <Route path="/" element={
              <div className="flex flex-col">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Clients />
                <Lab />
                <Services />
                <Contact />
              </div>
            } />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
