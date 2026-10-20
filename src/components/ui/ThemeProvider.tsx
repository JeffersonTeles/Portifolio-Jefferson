'use client';

import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';

type Theme = 'dark' | 'light';
type ThemeContextValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'jt-theme-preference';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {}
  const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
  return prefersLight ? 'light' : 'dark';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    setThemeState(getInitialTheme());
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
  }, [theme]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggleTheme = useCallback(() => setThemeState((p) => (p === 'dark' ? 'light' : 'dark')), []);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme deve ser usado dentro de <ThemeProvider>');
  return ctx;
}
