import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.jsx";

import "./Assets/Styles/index.css";

import "@fontsource/inter";
import "@fontsource/nunito-sans";
import "@fontsource/poppins"
import "@fontsource-variable/sora"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
