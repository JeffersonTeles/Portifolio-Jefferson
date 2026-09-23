import React from 'react';

const LiquidGlassButton = ({ children, className = '', ...props }) => {
  return (
    <button className={`liquid-glass-btn relative overflow-hidden ${className}`} {...props}>
      <span className="liquid-glass-bg" />
      <span className="liquid-glass-shine" />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default LiquidGlassButton;
