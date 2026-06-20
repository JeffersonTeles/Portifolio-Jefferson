import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';

const FloatingCTA = ({ onClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          onClick={onClick}
          className="fixed bottom-8 right-8 z-[140] flex items-center gap-3 pl-4 pr-5 py-3 bg-white text-black rounded-full font-bold text-[11px] uppercase tracking-widest shadow-[0_8px_32px_rgba(255,255,255,0.15)] pointer-events-auto hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)] transition-shadow"
          aria-label="Abrir formulário de contato"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Fale Comigo
          <FiMessageCircle size={14} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
