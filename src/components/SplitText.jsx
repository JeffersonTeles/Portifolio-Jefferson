import React from 'react';
import { motion } from 'framer-motion';

const SplitText = ({ text = "", className, delay = 0 }) => {
  if (!text || typeof text !== 'string') return null;
  const letters = text.split("");

  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const childVars = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  return (
    <motion.span
      variants={containerVars}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`inline-block overflow-hidden ${className}`}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={childVars}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default SplitText;
