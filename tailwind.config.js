/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./src/**/*.{ts,tsx,css,mdx}",
    "./src/**/*.css",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface-1)",
        accent: "var(--color-accent)",
        "accent-muted": "var(--color-accent-muted)",
        text: "var(--color-text)",
        muted: "var(--color-text-muted)",
        border: "var(--color-border)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-geist)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
}
