// src/utils/context/UserContext.js
import { createContext } from "react";

const LoggedContext = createContext({
  isLoggedIn: false,
  loggedInUser: "Default User",
});

export default LoggedContext;


