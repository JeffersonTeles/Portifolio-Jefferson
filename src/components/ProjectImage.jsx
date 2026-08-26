import React, { useState } from 'react';

const colors = ['#1a1520', '#151a1e', '#1a1815'];
const accents = ['#e2a63d', '#6ee7b7', '#93c5fd'];

const ProjectImage = ({ title, index = 0, stack = [] }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  const src = `/screenshot-${slug}.png`;

  return (
    <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-[#111] border border-white/[0.04] mb-6">
      {!isLoaded && <div className="absolute inset-0 bg-[#151515] animate-pulse" />}
      <img
        src={src}
        alt={`Screenshot do projeto ${title}`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className="absolute top-6 right-6 w-20 h-20 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"
        style={{ background: accents[index % accents.length] }}
      />
      <div className="absolute top-8 right-10 text-[0.7rem] font-mono text-white/15">{slug}</div>
      <div className="flex flex-wrap gap-1.5 relative z-10">
        {stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[0.65rem] font-mono text-white/40 bg-white/[0.05] rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectImage;
