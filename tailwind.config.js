/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "Inter", "system-ui", "sans-serif"],
        display: ["DM Sans", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        cinematic: "-0.03em",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
        glow: "0 0 20px rgba(251, 191, 36, 0.15)",
        "glow-accent": "0 0 30px rgba(251, 191, 36, 0.25)",
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
