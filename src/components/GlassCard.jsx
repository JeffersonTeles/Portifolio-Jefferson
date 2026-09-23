import React from 'react';

const GlassCard = ({ children, className = '', tag, ...props }) => {
  return (
    <div
      className={`relative rounded-2xl p-px overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))',
      }}
      {...props}
    >
      <div
        className="rounded-2xl bg-[#0a0a0a] p-6 md:p-8"
        style={{
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(255,255,255,0.02)',
        }}
      >
        {tag && (
          <span className="inline-block mb-3 text-[0.65rem] font-medium tracking-widest uppercase text-[#e2a63d]">
            {tag}
          </span>
        )}
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
