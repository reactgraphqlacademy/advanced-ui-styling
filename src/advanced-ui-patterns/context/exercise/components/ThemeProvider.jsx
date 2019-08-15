import React from "react";
import themes from "../theme";
import { ThemeProvider as StyledProvider } from "styled-components";

// First you need to create your `ThemeContext` (use React.CreateContext());
// you need to export this also..

export const ThemeContext = React.createContext();

class ThemeProvider extends React.Component {
  state = {
    theme: "dark"
  };

  handleThemeToggle = () => {
    this.setState(prevState => ({
      theme: prevState.theme === "dark" ? "light" : "dark"
    }));
  };
  render() {
    const { children } = this.props;
    const { theme } = this.state;
    const { handleThemeToggle } = this;

    return (
      <ThemeContext.Provider value={{ handleThemeToggle, theme }}>
        <StyledProvider theme={themes[theme]}>{children}</StyledProvider>
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
