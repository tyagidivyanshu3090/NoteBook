// StateContext.js

import React, { createContext, useState, useContext } from "react";

// 1. Create the Context
const StateContext = createContext();

// 2. Create the Provider component
export const StateProvider = ({ children }) => {
  // Change state to hold an object, initialized to null
  const [globalState, setGlobalState] = useState(null);

  return (
    // Provide the new state object and its setter function
    <StateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </StateContext.Provider>
  );
};

// 3. Create a custom hook for easy access
export const useStateContext = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};
