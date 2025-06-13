import React, { Suspense } from "react";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/styles/tailwind.css";

import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen bg-primary text-primary">
          Carregando...
        </div>
      }
    >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
);
