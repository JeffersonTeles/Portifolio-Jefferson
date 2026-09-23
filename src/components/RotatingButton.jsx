import React from 'react';

const RotatingButton = ({ onClick, children, className = '' }) => {
  return (
    <button onClick={onClick} className={`rot-bg-button ${className}`} aria-label="Voltar ao topo">
      <span className="rot-bg-svg-container">{children}</span>
      <span className="rot-bg-bg" />
    </button>
  );
};

export default RotatingButton;
