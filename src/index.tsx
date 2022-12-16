import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FontStyles from "./styles/fontStyles";
import "./styles/null.css";
import "./styles/styles.css";
import { setupStore } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FontStyles />
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
