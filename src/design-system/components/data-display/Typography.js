import React from "react";
import styled from "styled-components";
import Box from "../layout/Box";

const textVariantProps = {
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

const StyledTypography = styled(Box)``;
const Typography = ({ variant, ...rest }) => (
  <StyledTypography {...(variant && textVariantProps[variant])} {...rest} />
);
Typography.defaultProps = {
  variant: "p"
};

export const Text = styled(Typography)``;
Text.defaultProps = {
  mb: 2,
  as: "p"
};

export default Typography;
