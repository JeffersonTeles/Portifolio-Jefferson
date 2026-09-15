import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('light');
    } else {
      html.classList.add('light');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#aaa] hover:text-accent hover:border-accent/40 transition-all duration-300 shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-accent dark:hover:shadow-2xl"
      aria-label={isDark ? 'Modo claro' : 'Modo escuro'}
      style={{
        backgroundColor: isDark ? '#1a1a1a' : '#f0f0f0',
        color: isDark ? '#aaa' : '#555',
      }}
    >
      {isDark ? (
        <motion.span
          key="sun"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiSun size={16} />
        </motion.span>
      ) : (
        <motion.span
          key="moon"
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiMoon size={16} />
        </motion.span>
      )}
    </button>
  );
};

export default DarkModeToggle;
