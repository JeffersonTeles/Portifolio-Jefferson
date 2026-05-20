import React, { useState, useEffect } from 'react';

const DecryptText = ({ text = "", className = "", delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = '!@#$%^&*()_+[]{}:;|,.<>?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  useEffect(() => {
    // Safety check for non-string or empty inputs
    if (!text || typeof text !== 'string') {
      setDisplayText("");
      return;
    }

    let timeout;
    let iteration = 0;
    const maxIterations = 10;

    const startDecrypt = () => {
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (index < iteration) return char;
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += text.length / maxIterations;
      }, 50);
    };

    timeout = setTimeout(startDecrypt, delay * 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [text, delay]);

  // Return static text if anything fails or during delay
  return <span className={className}>{displayText || text || ""}</span>;
};

export default DecryptText;
