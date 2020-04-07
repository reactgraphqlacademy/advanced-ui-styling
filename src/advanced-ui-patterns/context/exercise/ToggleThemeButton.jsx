import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 3px;
  border: none;
  color: white;
  background-color: black;
`;

const ToggleButton = ({ children, ...rest }) => {
  const onClick = () =>
    console.log("Hint 🕵️‍♀️, replace me using the useTheme custom hook");

  return <StyledButton onClick={onClick} {...rest} />;
};

export default ToggleButton;
