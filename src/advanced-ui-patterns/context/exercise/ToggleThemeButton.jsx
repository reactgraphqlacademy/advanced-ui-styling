import React from "react";
import styled from "styled-components";
import { useTheme } from "./ThemeProvider";

const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 3px;
  border: none;
  color: white;
  background-color: black;
`;

const ToggleButton = (props) => {
  const { toggleTheme } = useTheme();

  return <StyledButton onClick={toggleTheme} {...props} />;
};

export default ToggleButton;
