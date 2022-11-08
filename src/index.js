import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./css/components.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();
