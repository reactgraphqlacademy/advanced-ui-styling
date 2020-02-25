import React from "react";
import styled from "styled-components";
import { variant } from "styled-system";
import Box from "../components/layout/Box";
import Typography, { Text } from "../components/data-display/Typography";
import Alert from "../components/feedback/Alert";
/*
Button example
*/
const buttonVariantProps = {
  primary: {
    backgroundColor: "primary",
    p: 2 // p:2 is the same in both variants, how can we fix that?
  },
  secondary: {
    backgroundColor: "secondary",
    p: 2 // p:2 is the same in both variants, how can we fix that?
  }
};

const StyledButton = styled(Box)``;
const Button = ({ variant, ...rest }) => (
  <StyledButton {...(variant && buttonVariantProps[variant])} {...rest} />
);
Button.defaultProps = {
  as: "button",
  variant: "primary",
  color: "white",
  fontSize: 2,
  borderRadius: 2
};

// show students the variant function alternative
// const Button = styled(Box)`
//   ${variant({
//     variants: buttonVariantProps
//   })}
// `;

/*
Exercise:
*/
const Page = () => (
  <div>
    <Typography variant="h1">Variant prop</Typography>
    <Typography variant="h2">Example</Typography>
    <Text>
      <Button>I'm a primary button</Button>
    </Text>
    <Text>
      <Button variant="secondary">I'm a secondary button</Button>
    </Text>
    <Typography variant="h2">Exercise</Typography>

    <Text>
      Refactor the Alert component in{" "}
      <code>src/design-system/components/feedback/Alert.js</code> to implement
      two variants following the specifi defined in the Alert.js file. Use the
      Box component (already imported in that file).
    </Text>

    <Alert variant="info">
      Hint: It's very similar to the Button example above, but you might not
      need to define the 'as' prop if the Box component already defines the 'as'
      props that we need.
    </Alert>

    <Alert variant="warning">
      Heads up! If you want to use the colors from the theme you'll have to use
      the props 'borderLeftColor', 'borderLeftStyle', and 'borderLeftWidth'
      instead of the prop 'borderLeft'
    </Alert>
  </div>
);

export default Page;
