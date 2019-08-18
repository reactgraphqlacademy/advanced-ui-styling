import React from "react";
import styled, { ThemeProvider } from "styled-components";
// import theme from "./theme";

/*
  Exercise TODO:
  - wrap the whole component with the `ThemeProvider` from "styled-components".
  - create a simple theme in `theme.js` and import it. (`import theme from './theme'`)
  - this theme should have the base colors for your app.
*/

/*
  remember that you can call a function inside styled-components:
  color: ${props => YOUR EXPRESSION};
*/
const Alert = styled("div")`
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  background-color: white;
`;

/*
  TODO: you need to "wrap" your component with the `ThemeProvider` component
  - remember that you need to pass a `theme` to this provider.
  - documentation: https://www.styled-components.com/docs/advanced#theming
*/

const ThemingExercise = () => <Alert>Hallo I'm a Alert</Alert>;

export default ThemingExercise;
