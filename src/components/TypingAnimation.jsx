import React, { useState, useEffect } from 'react';

const TypingAnimation = ({
  words = [],
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  className = '',
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));
          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));
          if (text === '') {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
};

export default TypingAnimation;
