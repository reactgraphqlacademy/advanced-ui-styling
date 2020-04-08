import React from "react";
import themes from "./theme";
import { ThemeProvider as StyledProvider } from "styled-components";

//Task 1, create your `ThemeContext` (use React.createContext());

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("dark");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // Task 2, wrap the StyledProvider with your ThemeContext.Provider and share the toggleTheme function
  return <StyledProvider theme={themes[theme]}>{children}</StyledProvider>;
};

// Task 3, implement the useTheme and share the context like the example useModal
export const useTheme = () => {};
// Task 4, use the useTheme custom hook in the ./ToggleThemeButton.jsx component

export default ThemeProvider;
