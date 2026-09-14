import React, { useState } from 'react';

const accents = ['#e2a63d', '#6ee7b7', '#93c5fd'];

const ProjectImage = ({ title, index = 0, stack = [] }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  let filename = 'casamento';
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('maestria') || lowerTitle.includes('tcc') || lowerTitle.includes('ensino') || lowerTitle.includes('docente')) {
    filename = 'maestria';
  } else if (lowerTitle.includes('casamento') || lowerTitle.includes('wedding')) {
    filename = 'casamento';
  } else if (lowerTitle.includes('x11') || lowerTitle.includes('mouse') || lowerTitle.includes('linux')) {
    filename = 'x11';
  } else {
    filename = index === 0 ? 'maestria' : index === 1 ? 'x11' : 'casamento';
  }

  const src = `/screenshot-${filename}.png`;

  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#111] border border-white/[0.08] mb-6 shadow-2xl group-hover:border-accent/40 transition-all duration-500">
      {!isLoaded && <div className="absolute inset-0 bg-[#151515] animate-pulse" />}
      <img
        src={src}
        alt={`Screenshot do projeto ${title}`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className="absolute top-6 right-6 w-20 h-20 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
        style={{ background: accents[index % accents.length] }}
      />
      <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 relative z-10">
        {stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-[0.7rem] font-mono text-white/90 bg-black/60 backdrop-blur-md rounded border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectImage;
