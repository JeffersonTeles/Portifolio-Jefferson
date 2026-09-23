import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className = '', id = '' }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1],
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
