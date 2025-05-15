import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./screens/Desktop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);