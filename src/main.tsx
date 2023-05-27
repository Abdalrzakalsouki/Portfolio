import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./views/Home";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
