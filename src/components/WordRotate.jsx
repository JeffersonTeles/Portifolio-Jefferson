import React, { useState, useEffect } from 'react';

const WordRotate = ({ words = [], interval = 3000, className = '' }) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={`inline-block ${className}`}>
      <span
        className={`inline-block transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        {words[index]}
      </span>
    </span>
  );
};

export default WordRotate;
