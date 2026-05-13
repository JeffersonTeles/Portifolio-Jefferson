/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f8f8f8',
          100: '#f1f1f1',
          200: '#e2e2e2',
          300: '#c9c9c9',
          400: '#adadad',
          500: '#999999',
          600: '#666666',
          700: '#333333',
          800: '#1a1a1a',
          900: '#0a0a0a',
        },
        neon: {
          cyan: '#00d9ff',
          blue: '#0066ff',
          purple: '#9d4edd',
          pink: '#ff006e',
        }
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #00d9ff 0%, #0066ff 50%, #9d4edd 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 217, 255, 0.5)',
        'neon-blue': '0 0 20px rgba(0, 102, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(157, 78, 221, 0.5)',
        'glow': '0 0 30px rgba(0, 217, 255, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'typing': 'typing 0.7s steps(40, end)',
        'blink': 'blink .7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.8)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: '#00d9ff' },
          '100%': { borderColor: 'transparent' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
