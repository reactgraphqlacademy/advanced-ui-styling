import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

const Alert = styled("div")`
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  background-color: ${(props) => {
    console.log("aaaa", props);
    return props.theme.colors.background;
  }};
`;

const ThemingExercise = () => (
  <ThemeProvider theme={theme}>
    <Alert>Hello I'm a Alert</Alert>
  </ThemeProvider>
);

export default ThemingExercise;
