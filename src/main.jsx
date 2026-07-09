import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SectionProvider } from "./context/SectionContext.jsx";

if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((registration) => registration.unregister()));

    if ("caches" in window) {
      const cacheKeys = await caches.keys();
      await Promise.all(cacheKeys.map((key) => caches.delete(key)));
    }
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <SectionProvider>
        <App />
      </SectionProvider>
      <Analytics />
    </ErrorBoundary>
  </React.StrictMode>,
);
