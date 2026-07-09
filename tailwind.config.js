/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        builder: {
          bg: "#020617",
          card: "#0f172a",
          accent: "#60a5fa",
          terminal: "#94a3b8",
          muted: "#94a3b8",
        },
        dark: {
          bg: "#020617",
          card: "#0f172a",
          accent: "#60a5fa",
          muted: "#94a3b8",
        },
        lusion: {
          text: "#e2e8f0",
          primary: "#60a5fa",
          bg: "#020617",
        },
        premium: {
          bg: "#020617",
          card: "#0f172a",
          accent: "#60a5fa",
          muted: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"], // Switch display to Inter for a cleaner tech look
      },
      letterSpacing: {
        cinematic: "-0.04em", // Slightly less aggressive
        "lusion-tighter": "-0.02em",
        "lusion-wide": "0.05em",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
        glow: "0 0 20px rgba(96, 165, 250, 0.08)",
        "glow-accent": "0 0 30px rgba(96, 165, 250, 0.16)",
      },
      backgroundImage: {
        "premium-gradient":
          "linear-gradient(to bottom right, rgba(96,165,250,0.08), rgba(0,0,0,0))",
        "grid-pattern":
          "radial-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
