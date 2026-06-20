import React, { useState } from "react";

const SkipLink = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <a
      href="#main-content"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`
        fixed top-4 left-4 z-[10000] px-6 py-3 bg-white text-black font-bold text-sm rounded-lg
        transition-all duration-200
        ${isFocused ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}
      aria-label="Pular para o conteúdo principal"
    >
      Pular para o conteúdo principal
    </a>
  );
};

export default SkipLink;
