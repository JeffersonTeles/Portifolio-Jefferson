/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0f',
          card: '#12121e',
          accent: '#00d4ff', // Cyan
          terminal: '#00ff88', // Green
          muted: '#808080',
        }
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'wide': '0.15em',
      }
    },
  },
  plugins: [],
}
