/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          bg: '#050816',
          navy: '#070B14',
          card: '#0B1020',
          accent: '#00d4ff', // Electric Cyan
          glow: 'rgba(0, 212, 255, 0.15)',
          muted: '#808ba0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'cinematic': '-0.05em',
        'badge': '0.3em',
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-opacity='0.03'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
