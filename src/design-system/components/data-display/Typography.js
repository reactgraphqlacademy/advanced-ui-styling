import React from "react";
import styled from "styled-components";
import Box from "../layout/Box";
// show students how the variant function works
// import { variant } from "styled-system";

/* 
EXERCISE
Create a Typography component with the following variants:
 - h1:
    must render as an 'h1' dom element
    font size must be the 7th from our design system
 - h2:
    must render as an 'h2' dom element
    font size must be the 6th from our design system
 - h3:
    must render as an 'h3' dom element
    font size must be the 5th from our design system
- p
    must render as a 'p' dom element
    font size must be the 2nd from our design system
- span
    must render as a 'span' dom element
    font size must be the 2nd from our design system
- the default variant should be 'span'
*/

const variants = {
  h1: {
    as: "h1",
    fontSize: 7
  },
  h2: {
    as: "h2",
    fontSize: 6
  },
  h3: {
    as: "h3",
    fontSize: 5
  },
  p: {
    as: "p",
    fontSize: 2
  },
  span: {
    as: "span",
    fontSize: 2
  }
};

export const Text = props => <Typography {...props} />;
Text.defaultProps = {
  variant: "p"
};

// before solution
// export const Text = props => <p {...props} />;

const StyledTypography = styled(Box)``;
const Typography = ({ variant, ...rest }) => (
  <StyledTypography {...variant && variants[variant]} {...rest} />
);

Typography.defaultProps = {
  variant: "span"
};

export default Typography;
