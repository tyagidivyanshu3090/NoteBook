// index.js (or main.jsx)
import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";



import { Provider } from "react-redux";
import appStore from "./src/utils/redux_Store/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap your App with the Provider and pass it the store */}
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
