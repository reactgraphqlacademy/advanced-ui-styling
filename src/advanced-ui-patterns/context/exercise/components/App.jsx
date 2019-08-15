import React from "react";
import { ThemeContext } from "./ThemeProvider";
import Button from "./Button";
import Hero from "./Hero";

const App = () => (
  <Hero>
    <ThemeContext.Consumer>
      {({ handleThemeToggle }) => (
        <Button onClick={handleThemeToggle}>Theme Switcher</Button>
      )}
    </ThemeContext.Consumer>
  </Hero>
);

export default App;
