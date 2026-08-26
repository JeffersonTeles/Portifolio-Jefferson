import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-[#111] border border-white/[0.08] flex items-center justify-center text-[#555] hover:text-accent hover:border-accent/30 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label="Voltar ao topo"
    >
      <FiArrowUp size={16} />
    </button>
  );
};

export default BackToTop;
