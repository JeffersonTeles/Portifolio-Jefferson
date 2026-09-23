import React from 'react';

const GradientBorderCard = ({ children, className = '', ...props }) => {
  return (
    <div className={`gradient-border-card ${className}`} {...props}>
      {children}
    </div>
  );
};

export default GradientBorderCard;
