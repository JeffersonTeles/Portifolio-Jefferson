import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(), 
    visualizer({
      filename: "dist/bundle-stats.html",
      open: false,
      gzipSize: true,
      brotliSize: true,
    })
  ],
  base: "/",
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
          i18n: ["i18next", "react-i18next"],
        },
      },
    },
  },
});
