import React, { useEffect, useState } from 'react';

const Meteors = ({ number = 20, className = '' }) => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const newMeteors = [];
    for (let i = 0; i < number; i++) {
      newMeteors.push({
        id: i,
        left: Math.floor(Math.random() * 100) + '%',
        animationDelay: Math.random() * 5 + 's',
        animationDuration: Math.floor(Math.random() * 4 + 3) + 's',
        opacity: Math.random() * 0.7 + 0.3,
        width: Math.random() * 80 + 40,
      });
    }
    setMeteors(newMeteors);
  }, [number]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute h-0.5 rotate-[215deg] animate-meteor rounded-full"
          style={{
            left: meteor.left,
            top: '-10%',
            width: `${meteor.width}px`,
            background: 'linear-gradient(to right, #e2a63d, transparent)',
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
            opacity: meteor.opacity,
          }}
        >
          <span
            className="absolute top-1/2 -z-10 h-px w-20 -translate-y-1/2 bg-gradient-to-r from-accent/40 to-transparent"
            style={{ left: 0 }}
          />
        </span>
      ))}
    </div>
  );
};

export default Meteors;
