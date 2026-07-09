import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SectionProvider } from "./context/SectionContext.jsx";

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
