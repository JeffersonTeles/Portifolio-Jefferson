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
        lusion: {
          bg: '#F0F1FA',
          primary: '#1A2FFB',
          text: '#050505',
          muted: '#808080',
        }
      },
      letterSpacing: {
        'lusion-tighter': '-0.04em',
        'lusion-wide': '0.15em',
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
      }
    },
  },
  plugins: [],
}
