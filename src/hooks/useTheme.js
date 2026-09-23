import { useEffect, useState } from 'react';

const readTheme = () =>
  typeof document !== 'undefined' && document.documentElement.classList.contains('light');

/**
 * Observa a classe `light` no <html> e re-renderiza o consumidor quando o
 * tema muda. Substitui leituras não-reativas de documentElement no render,
 * que deixavam componentes com cores do tema antigo até o próximo scroll.
 */
const useTheme = () => {
  const [isLight, setIsLight] = useState(readTheme);

  useEffect(() => {
    const observer = new MutationObserver(() => setIsLight(readTheme()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    // O DarkModeToggle aplica a classe num effect que pode rodar antes deste:
    // sincroniza o estado atual após a assinatura para não perder a mutação.
    setIsLight(readTheme());
    return () => observer.disconnect();
  }, []);

  return isLight;
};

export default useTheme;
