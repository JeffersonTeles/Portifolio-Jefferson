/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        builder: {
          bg: '#05060f',
          card: '#0c0d18',
          accent: '#00d4ff', // Electric Blue
          terminal: '#00ff88', // Neo Green
          muted: '#808ba0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      letterSpacing: {
        'cinematic': '-0.06em',
      },
    },
  },
  plugins: [],
}
