import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FontStyles from "./styles/fontStyles";
import "./styles/null.css";
import "./styles/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>
);

reportWebVitals();
