/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#2a2a2a',
        }
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
  extend: {
    animation: {
      'scan': 'scan 4s linear infinite',
      'float': 'float 4s ease-in-out infinite',
      'glitch': 'glitch 2s infinite',
      'pulse-border': 'pulse-border 2s ease-in-out infinite',
      'spin-slow': 'spin-slow 20s linear infinite',
    }
  }
