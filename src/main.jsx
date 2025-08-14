import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SignContext from "./Context/SignContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SignContext>
      <App />
    </SignContext>
  </StrictMode>
);
