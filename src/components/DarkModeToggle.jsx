import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  const toggle = () => setIsDark((prev) => !prev);

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[#888] hover:text-accent hover:border-accent/30 transition-all duration-300 shadow-lg focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={isDark ? 'Modo claro' : 'Modo escuro'}
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
