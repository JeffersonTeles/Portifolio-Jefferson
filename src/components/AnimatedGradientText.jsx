import React from 'react';

/**
 * Passthrough wrapper kept for API compatibility. The gradient itself now
 * lives on each text-bearing child (see WordByWord in App.jsx): a
 * background-clip:text on an ancestor of transform-animated spans stops
 * repainting the clipped background in Chromium, leaving the title invisible.
 */
const AnimatedGradientText = ({ children, className = '' }) => {
  return <span className={className}>{children}</span>;
};

export default AnimatedGradientText;
