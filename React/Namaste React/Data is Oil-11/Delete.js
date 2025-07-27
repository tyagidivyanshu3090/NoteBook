// src/Header.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header() {
  // Use the context to get the shared theme and toggle function.
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}
