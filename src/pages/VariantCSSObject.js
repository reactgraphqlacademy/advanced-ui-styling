import React from "react";
import styled from "styled-components";
import { variant } from "styled-system";

const buttonStyle = variant({
  key: "buttons"
});

const Button = styled("button")`
  background: white;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 800;
  padding: 16px;
  margin: 16px;
  transition: all 0.2s ease;
  ${buttonStyle};
`;

Button.defaultProps = {
  variant: "primary"
};

const Page = () => (
  <React.Fragment>
    <Button>Primary Button</Button>
    <Button variant="secondary">Secondary Button</Button>
  </React.Fragment>
);

export default Page;
