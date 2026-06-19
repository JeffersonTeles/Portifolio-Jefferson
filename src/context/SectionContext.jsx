import React, { createContext, useContext, useState, useEffect } from 'react';

const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('hero');
  const [currentYear, setCurrentYear] = useState(2026);
  const [scrollVelocity, setScrollVelocity] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <SectionContext.Provider value={{ currentSection, currentYear, setCurrentYear, scrollVelocity, setScrollVelocity }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => useContext(SectionContext);
