import React from "react";
import styled from "styled-components";
import Box from "../layout/Box";

/*
Alert variant styles:

info:
- padding: 3
- margint top and bottom: 2
- border left width: 3px
- border left color: blue
- border left style: solid
- background-color: lightBlue

warning:
- padding: 3
- margint top and bottom: 2
- border left width: 3px
- border left color: orange
- border left style: solid
- background-color: yellow
*/
// const Alert = styled("div")``;

// solution
const alertVariantProps = {
  info: {
    borderLeftColor: "blue",
    backgroundColor: "lightBlue"
  },
  warning: {
    borderLeftColor: "orange",
    backgroundColor: "yellow"
  }
};

const StyledAlert = styled(Box)``;
const Alert = ({ variant, ...rest }) => (
  <StyledAlert {...variant && alertVariantProps[variant]} {...rest} />
);
Alert.defaultProps = {
  p: 3,
  my: 2,
  borderLeftWidth: "3px",
  borderLeftStyle: "solid"
};

export default Alert;
