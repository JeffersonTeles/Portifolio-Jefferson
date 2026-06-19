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
          bg: '#000000', // Deep black for Vercel/Linear look
          card: '#0a0a0a', // Very dark grey
          accent: '#ffffff', // White as primary accent for elegance
          terminal: '#888888', // Subtle grey
          muted: '#666666', // Muted text
        },
        dark: {
          bg: '#000000',
          card: '#0a0a0a',
          accent: '#ffffff',
          muted: '#666666',
        },
        lusion: {
          text: '#ffffff',
          primary: '#ffffff',
          bg: '#000000',
        },
        premium: {
          bg: '#000000',
          card: '#0a0a0a',
          accent: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'], // Switch display to Inter for a cleaner tech look
      },
      letterSpacing: {
        'cinematic': '-0.04em', // Slightly less aggressive
        'lusion-tighter': '-0.02em',
        'lusion-wide': '0.05em',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.05)',
        'glow-accent': '0 0 30px rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(0,0,0,0))',
        'grid-pattern': 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
