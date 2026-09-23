import React, { useRef, useState, useCallback } from 'react';

const GlareCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Position for glare (0 to 1)
    setPosition({ x, y });

    // Calculate tilt (subtle 3D effect)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -3; // Max 3 degrees
    const tiltY = ((x - centerX) / centerX) * 3; // Max 3 degrees

    setTilt({ x: tiltX, y: tiltY });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`glare-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
    >
      {children}

      {/* Glare effect overlay */}
      <div
        className="glare-effect"
        style={{
          background: isHovered
            ? `radial-gradient(circle 200px at ${position.x}px ${position.y}px, rgba(226, 166, 61, 0.12), rgba(255, 255, 255, 0.05) 40%, transparent 70%)`
            : 'none',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};

export default GlareCard;
