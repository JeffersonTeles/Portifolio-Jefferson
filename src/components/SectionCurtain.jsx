import React from 'react';
import { motion } from 'framer-motion';

const SectionCurtain = () => {
  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: [0.87, 0, 0.13, 1], delay: 0.5 }}
      onAnimationComplete={() => {
        // Optional: Force visibility hidden if needed
      }}
      style={{ originX: 1 }}
      className="fixed inset-0 z-[80] bg-lusion-primary pointer-events-none"
    />
  );
};

export default SectionCurtain;
