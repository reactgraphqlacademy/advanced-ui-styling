import React from "react";
import styled, { ThemeProvider } from "styled-components";
// import theme from "./theme";

/*
  Exercise 🏋️‍♀️:
  1- Wrap the Alert component inside the ThemingExercise component at the bottom of this file with the `ThemeProvider` from "styled-components" https://styled-components.com/docs/advanced#theming.
  2- Add some colors in your theme in `./theme.js` and import it (the import is commented out)
*/

/*
  Hint 🕵️‍♀️: You can call a function inside a template literal (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals),
  styled-components will call that function with the props that are passed to it from the parent component
  e.g. color: ${props => SOME_EXPRESSION};
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

const ThemingExercise = () => (
  /*
    Hint 🕵️‍♀️: Add the ThemeProvider here
  */
  <Alert>Hello I'm a Alert</Alert>
);

export default ThemingExercise;
