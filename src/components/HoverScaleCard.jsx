import React from 'react';

const HoverScaleCard = ({ children, className = '', scale = 1.02, ...props }) => {
  return (
    <div
      className={`hover-scale-card transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${className}`}
      style={{ '--hover-scale': scale }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `scale(${scale})`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default HoverScaleCard;
