/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: '#050505',
          card: '#0a0a0a',
          accent: '#00d4ff', // Clean Cyan for precision
          text: '#ffffff',
          muted: '#808080',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      letterSpacing: {
        'premium': '-0.05em',
        'sub': '0.3em',
      }
    },
  },
  plugins: [],
}
