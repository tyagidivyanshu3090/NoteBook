import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store"; // ✅ Redux store
import { UserActivityProvider } from "./context/UserActivityContext"; // ✅ Adjust path if needed
import { StateProvider } from "./context/StateContext"; // <-- IMPORT THE NEW PROVIDER
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <UserActivityProvider>
          <StateProvider>
            <App />
          </StateProvider>
        </UserActivityProvider>
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>
);

reportWebVitals();
