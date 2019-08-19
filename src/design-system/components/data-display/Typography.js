import React from "react";
import styled from "styled-components";
import Box from "../layout/Box";
// show students how the variant function doesn't work in this case
// import { variant } from "styled-system";

/* 
EXERCISE PART 1

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
- the default variant should be 'p'
*/

const variants = {};

const Typography = ({ variant, ...rest }) => <h2 {...rest} />;

/* 
EXERCISE PART 2

Compose the Text component with the Typography component so the Text component renders as 'p' by default
*/

export const Text = props => (
  <p style={{ marginTop: 0, marginBottom: "1rem" }} {...props} />
);

export default Typography;
