import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import pwaConfig from "./vite-plugin-pwa.config.js";

export default defineConfig({
  plugins: [react(), VitePWA(pwaConfig)],
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
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          i18n: ["i18next", "react-i18next"],
        },
      },
    },
  },
});
