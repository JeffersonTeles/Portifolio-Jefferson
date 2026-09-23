import React from 'react';

const SparkButton = ({
  children,
  className = '',
  href = null,
  onClick = null,
  type = null,
  disabled = false,
  spark = false,
  borderTrail = false,
  ...props
}) => {
  const isButton = type !== null;

  const trailClass = borderTrail ? 'border-trail' : '';
  const sparkClass = spark ? 'spark-button' : '';
  const borderClass = !spark && !borderTrail ? 'border border-white/15' : '';

  const baseClassName = `${trailClass} ${sparkClass} ${borderClass} group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white/10 font-medium transition-transform duration-500 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 ${className}`;

  if (isButton) {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={baseClassName}
        {...props}
      >
        <span className="relative z-10 flex w-full items-center justify-center gap-2 rounded-[11px] bg-surface px-7 py-3 text-sm shadow-lg ring-1 ring-white/5">
          {children}
        </span>
      </button>
    );
  }

  return (
    <a href={href} onClick={onClick} className={baseClassName} {...props}>
      <span className="relative z-10 flex w-full items-center justify-center gap-2 rounded-[11px] bg-surface px-7 py-3 text-sm shadow-lg ring-1 ring-white/5">
        {children}
      </span>
    </a>
  );
};

export default SparkButton;
