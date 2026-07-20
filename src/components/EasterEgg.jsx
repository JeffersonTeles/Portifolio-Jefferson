import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

const EasterEgg = () => {
  const [seq, setSeq] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      setSeq((prev) => {
        const next = [...prev, e.key].slice(-KONAMI.length);
        if (next.join(',') === KONAMI.join(',')) {
          setShow(true);
          setTimeout(() => setShow(false), 5000);
        }
        return next;
      });
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9000] flex items-center justify-center pointer-events-none"
        >
          {/* Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: '100vh', x: `${Math.random() * 100}vw`, opacity: 1 }}
                animate={{ y: '-20vh', opacity: 0 }}
                transition={{ duration: 2 + Math.random() * 2, delay: Math.random() * 0.5 }}
                className="absolute text-2xl"
              >
                {['●','◇','○','⊕','⊛','◆'][Math.floor(Math.random() * 6)]}
              </motion.div>
            ))}
          </div>

          {/* Badge */}
          <motion.div
            initial={{ scale: 0.5, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: -20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="relative glass-panel border border-white/20 rounded-3xl p-10 text-center shadow-[0_0_80px_rgba(255,255,255,0.1)] max-w-sm mx-4"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-white/60">JS</span>
            </div>
            <p className="text-[9px] font-mono text-white/30 uppercase tracking-[0.4em] mb-2">Achievement Unlocked</p>
            <h3 className="text-2xl font-extrabold text-white tracking-tight mb-3">∞ Builder Mode</h3>
            <p className="text-sm text-white/40 font-light">
              Você descobriu o código secreto.<br />Jefferson aprova.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
