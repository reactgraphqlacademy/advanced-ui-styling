import React from "react";

import Box from "../layout/Box";

const textVariantProps = {
  h1: {
    as: "h1",
    fontSize: 7,
  },
  h2: {
    as: "h2",
    fontSize: 6,
  },
  h3: {
    as: "h3",
    fontSize: 5,
  },
  p: {
    as: "p",
    fontSize: 2,
  },
  span: {
    as: "span",
    fontSize: 2,
  },
};

const Typography = ({ variant, ...rest }) => (
  <Box {...(variant && textVariantProps[variant])} {...rest} />
);
Typography.defaultProps = {
  variant: "p",
};

export const Text = (props) => <Typography {...props} />;
Text.defaultProps = {
  mb: 2,
  as: "p",
};

export default Typography;
