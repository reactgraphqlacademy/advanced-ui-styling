import React from "react";
import themes from "./theme";
import { ThemeProvider as StyledProvider } from "styled-components";

export const ModalContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("dark");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ModalContext.Provider value={{ toggleTheme }}>
      <StyledProvider theme={themes[theme]}>{children}</StyledProvider>
    </ModalContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ModalContext);

  if (!context) {
    throw new Error("We could not find a Theme context");
  }

  return context;
};

export default ThemeProvider;
