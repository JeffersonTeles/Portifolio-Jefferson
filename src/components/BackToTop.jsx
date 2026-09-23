import React, { useState, useEffect } from 'react';
import RotatingButton from './RotatingButton';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <RotatingButton
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="rot-bg-button"
      >
        <ArrowUp size={20} />
      </RotatingButton>
    </div>
  );
};

export default BackToTop;
