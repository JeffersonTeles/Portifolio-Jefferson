/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Geist', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      colors: {
        surface: {
          DEFAULT: '#0a0a0a',
          1: '#111111',
          2: '#1a1a1a',
          3: '#222222',
        },
        accent: {
          DEFAULT: '#e2a63d',
          hover: '#f0b94f',
          dim: '#e2a63d20',
        },
        primary: {
          DEFAULT: '#e2a63d',
          foreground: '#0a0a0a',
        },
        secondary: {
          DEFAULT: '#2b2b2b',
          foreground: '#e2a63d',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#6b7280',
          foreground: '#9ca3af',
        },
        accent: {
          DEFAULT: '#e2a63d',
          foreground: '#0a0a0a',
        },
        input: {
          DEFAULT: '#2a2a2a',
        },
        ring: {
          DEFAULT: '#e2a63d',
        },
        background: {
          DEFAULT: '#0a0a0a',
        },
        border: {
          DEFAULT: '#2a2a2a',
        },
        card: {
          DEFAULT: '#1a1a1a',
        },
        popover: {
          DEFAULT: '#1a1a1a',
        },
      },
      backgroundImage: {
        'linear-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'inset-2xs': 'inset 0 -2px 2px rgba(0,0,0,0.1)',
        'inset-white/10': 'inset 0 0 10px rgba(255,255,255,0.1)',
        'inset-white/25': 'inset 0 0 10px rgba(255,255,255,0.25)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
