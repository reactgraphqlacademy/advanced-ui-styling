import React from "react";
import styled from "styled-components";
import { variant } from "styled-system";
import Box from "../components/layout/Box";
import Typography from "../components/data-display/Typography";

const buttonVariantProps = {
  primary: {
    backgroundColor: "blue"
    // p: 2 // p:2 is the same in both variants, how can we fix that?
  },
  secondary: {
    backgroundColor: "pink"
    // p: 2 // p:2 is the same in both variants, how can we fix that?
  }
};

const StyledButton = styled(Box)`
  border-radius: 5px;
`;
const Button = ({ variant, ...rest }) => (
  <StyledButton {...variant && buttonVariantProps[variant]} {...rest} />
);
Button.defaultProps = {
  as: "button",
  variant: "primary",
  p: 2
};

// show students the variant function alternative
// const Button = styled(Box)`
//   ${variant({
//     variants: buttonVariantProps
//   })}
// `;

const Page = () => (
  <div>
    <Typography variant="h1">Variants</Typography>
    <p>
      <Button>I'm a primary button</Button>
    </p>
    <p>
      <Button variant="secondary">I'm a secondary button</Button>
    </p>
    <p>
      Create an image component in{" "}
      <code>src/design-system/components/data-display/Image.js</code> using the
      Box from <code>src/design-system/components/layout/Box</code>
    </p>
    <h2>Headings</h2>
    h1. Heading h2. Heading h3. Heading h4. Heading h5. Heading h6. Heading
    <h2>Paragraph</h2>
    <h2>Text</h2>
    <h2>One Typography to rule them all</h2>
  </div>
);

export default Page;
