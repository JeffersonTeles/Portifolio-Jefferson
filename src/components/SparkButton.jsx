import React from 'react';

const SparkButton = ({ children, className = '', href = null, onClick = null, type = null, disabled = false, ...props }) => {
  const isButton = type !== null;

  return (
    <>
      {isButton ? (
        <button
          type={type}
          disabled={disabled}
          onClick={onClick}
          className={`group relative overflow-hidden rounded-xl p-[1px] inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
          {/* Faísca giratória na borda - mais sutil */}
          <div
            className="absolute inset-0 rounded-[14px] overflow-hidden"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(226,166,61,0.5), rgba(110,231,183,0.5), rgba(147,197,253,0.5), rgba(226,166,61,0.5), transparent)',
              animation: 'spinBorder 2.5s linear infinite',
            }}
          />
          {/* Camada de proteção semi-transparente */}
          <div
            className="absolute inset-0 rounded-[14px] bg-surface/85 pointer-events-none"
          />
          {/* Conteúdo do botão */}
          <div className="relative z-10 flex items-center justify-center rounded-[13px] bg-surface px-7 py-3 text-sm shadow-lg">
            {children}
          </div>
        </button>
      ) : (
        <a
          href={href}
          onClick={onClick}
          className={`group relative overflow-hidden rounded-xl p-[1px] inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
            (href && (href === '#contact' || href === '#projects' || href?.startsWith('/'))) ? '' : 'block w-full text-center'
          } ${className}`}
        >
          {/* Faísca giratória na borda - mais sutil */}
          <div
            className="absolute inset-0 rounded-[14px] overflow-hidden"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(226,166,61,0.5), rgba(110,231,183,0.5), rgba(147,197,253,0.5), rgba(226,166,61,0.5), transparent)',
              animation: 'spinBorder 2.5s linear infinite',
            }}
          />
          {/* Camada de proteção semi-transparente */}
          <div
            className="absolute inset-0 rounded-[14px] bg-surface/85 pointer-events-none"
          />
          {/* Conteúdo do botão */}
          <div className="relative z-10 flex items-center justify-center rounded-[13px] bg-surface px-7 py-3 text-sm shadow-lg">
            {children}
          </div>
        </a>
      )}
    </>
  );
};

export default SparkButton;
