import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

/*
  Styled Components theme documentation https://www.styled-components.com/docs/advanced#theming
*/
const Button = styled("button")`
  border-radius: 8px;
  font-size: 24px;
  padding: 8px 16px;
  color: ${props => props.theme.colors.blue};
  border: 2px solid ${props => props.theme.colors.blue};

  &:hover {
    color: ${props => props.theme.colors.green};
    border: 2px solid ${props => props.theme.colors.green};
  }
`;

const ThemingExample = () => (
  <ThemeProvider theme={theme}>
    <Button>My Styled theme Button</Button>
  </ThemeProvider>
);

export default ThemingExample;
