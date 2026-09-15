import React from 'react';

const SparkButton = ({ children, className = '', href = null, onClick = null, type = 'button', ...props }) => {
  const isLink = href && href !== '#';

  return (
    <a
      href={isLink ? href : undefined}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl p-[1px] inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        isLink && href !== '#contact' && href !== '#projects' && !href.startsWith('/') ? 'block w-full text-center' : ''
      } ${className}`}
    >
      {/* Camada de borda giratória - spark glow */}
      <div
        className="absolute inset-0 rounded-xl overflow-hidden"
        style={{
          background: 'conic-gradient(from 0deg, transparent, rgba(226,166,61,0.9), rgba(110,231,183,0.9), rgba(147,197,253,0.9), rgba(226,166,61,0.9), transparent)',
          animation: 'spinBorder 2.5s linear infinite',
        }}
      />
      {/* Camada de proteção para manter o brilho apenas na borda */}
      <div
        className="absolute inset-0 rounded-xl bg-surface pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.9)',
        }}
      />
      {/* Conteúdo do botão - camada superior */}
      <div className="relative z-10 flex items-center justify-center rounded-xl bg-surface px-8 py-3.5 text-sm shadow-lg">
        {children}
      </div>
    </a>
  );
};

export default SparkButton;
