import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // All The JSX are injected to the root id
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
