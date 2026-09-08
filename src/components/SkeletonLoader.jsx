import React from 'react';

const SkeletonLoader = ({ className = '', variant = 'default' }) => {
  const baseClasses = 'animate-pulse bg-white/5 rounded';

  const variants = {
    default: 'h-4 w-full',
    text: 'h-4 w-3/4',
    title: 'h-8 w-1/2',
    avatar: 'h-12 w-12 rounded-full',
    button: 'h-10 w-32 rounded-full',
    card: 'h-48 w-full',
  };

  return <div className={`${baseClasses} ${variants[variant]} ${className}`} aria-hidden="true" />;
};

export default SkeletonLoader;
