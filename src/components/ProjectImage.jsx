import React, { useState, useMemo } from 'react';

const projectThemes = {
  maestria: {
    gradient: ['#1a1a2e', '#16213e', '#0f3460'],
    accent: '#e2a63d',
    pattern: 'dots',
    icon: '📚',
  },
  x11: {
    gradient: ['#0d1117', '#161b22', '#21262d'],
    accent: '#58a6ff',
    pattern: 'grid',
    icon: '🖱️',
  },
  casamento: {
    gradient: ['#1a0a0a', '#2d1515', '#1a0a0a'],
    accent: '#d4a574',
    pattern: 'rings',
    icon: '💍',
  },
  telesseg: {
    gradient: ['#0a1628', '#0d2137', '#0a1628'],
    accent: '#4ade80',
    pattern: 'shield',
    icon: '🛡️',
  },
};

const getProjectKey = (title) => {
  const lower = title.toLowerCase();
  if (lower.includes('maestria') || lower.includes('tcc') || lower.includes('docente'))
    return 'maestria';
  if (lower.includes('x11') || lower.includes('mouse') || lower.includes('linux')) return 'x11';
  if (lower.includes('casamento') || lower.includes('wedding')) return 'casamento';
  if (lower.includes('telesseg')) return 'telesseg';
  return 'maestria';
};

const generateSVG = (key, stack) => {
  const theme = projectThemes[key] || projectThemes.maestria;
  const [c1, c2, c3] = theme.gradient;

  const patternSVG = {
    dots: `<pattern id="pat" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1" fill="${theme.accent}" opacity="0.15"/>
    </pattern>`,
    grid: `<pattern id="pat" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="${theme.accent}" stroke-width="0.3" opacity="0.12"/>
    </pattern>`,
    rings: `<pattern id="pat" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="15" fill="none" stroke="${theme.accent}" stroke-width="0.3" opacity="0.1"/>
      <circle cx="20" cy="20" r="8" fill="none" stroke="${theme.accent}" stroke-width="0.2" opacity="0.08"/>
    </pattern>`,
    shield: `<pattern id="pat" width="50" height="50" patternUnits="userSpaceOnUse">
      <path d="M25 5 L45 15 L45 30 Q45 45 25 48 Q5 45 5 30 L5 15 Z" fill="none" stroke="${theme.accent}" stroke-width="0.4" opacity="0.08"/>
    </pattern>`,
  };

  const techBadges = stack
    .slice(0, 5)
    .map((tech, i) => {
      const x = 30 + i * 110;
      return `<g transform="translate(${x}, 320)">
      <rect x="0" y="0" width="95" height="28" rx="6" fill="rgba(0,0,0,0.5)" stroke="${theme.accent}" stroke-width="0.5" opacity="0.8"/>
      <text x="47" y="18" text-anchor="middle" fill="${theme.accent}" font-family="monospace" font-size="11" opacity="0.9">${tech}</text>
    </g>`;
    })
    .join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="50%" stop-color="${c2}"/>
      <stop offset="100%" stop-color="${c3}"/>
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${theme.accent}" stop-opacity="0"/>
      <stop offset="50%" stop-color="${theme.accent}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="${theme.accent}" stop-opacity="0"/>
    </linearGradient>
    ${patternSVG[theme.pattern]}
    <filter id="blur">
      <feGaussianBlur stdDeviation="40"/>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#bg)"/>
  <rect width="800" height="450" fill="url(#pat)"/>

  <ellipse cx="400" cy="200" rx="250" ry="150" fill="${theme.accent}" filter="url(#blur)" opacity="0.08"/>

  <rect x="0" y="180" width="800" height="90" fill="url(#glow)"/>

  <text x="400" y="170" text-anchor="middle" fill="${theme.accent}" font-size="48" opacity="0.12">${theme.icon}</text>

  <text x="400" y="215" text-anchor="middle" fill="white" font-family="system-ui, sans-serif" font-size="22" font-weight="600" opacity="0.9">${key.charAt(0).toUpperCase() + key.slice(1)}</text>
  <text x="400" y="245" text-anchor="middle" fill="${theme.accent}" font-family="monospace" font-size="12" opacity="0.6">${stack.slice(0, 4).join(' · ')}</text>

  <rect x="100" y="380" width="600" height="1" fill="${theme.accent}" opacity="0.1"/>

  ${techBadges}

  <circle cx="720" cy="60" r="80" fill="${theme.accent}" opacity="0.03"/>
  <circle cx="80" cy="380" r="60" fill="${theme.accent}" opacity="0.03"/>
</svg>`;

  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
};

const ProjectImage = ({ title, image, stack = [] }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const projectKey = useMemo(() => getProjectKey(title), [title]);
  const fallbackSrc = useMemo(() => generateSVG(projectKey, stack), [projectKey, stack]);
  const showRealImage = image && !imgError;

  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#111] border border-white/[0.08] mb-6 shadow-2xl group-hover:border-accent/40 transition-all duration-500">
      {showRealImage && !imgLoaded && (
        <div className="absolute inset-0 bg-[#151515] animate-pulse" />
      )}

      <img
        src={showRealImage ? image : fallbackSrc}
        alt={`Preview do projeto ${title}`}
        loading="lazy"
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgError(true)}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
          imgLoaded || !showRealImage ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className="absolute top-6 right-6 w-20 h-20 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
        style={{ background: projectThemes[projectKey]?.accent || '#e2a63d' }}
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
