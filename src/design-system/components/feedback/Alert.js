import styled from "styled-components";
import { variant } from "styled-system";
import Box from "../layout/Box";

const variantProps = {
  info: {
    backgroundColor: "lightBlue",
    borderLeftColor: "blue",
  },
  warning: {
    borderLeftColor: "orange",
    backgroundColor: "yellow",
  },
};

const Alert = styled(Box)`
  ${variant({
    variants: variantProps,
  })}
`;

Alert.defaultProps = {
  p: 3,
  mt: 2,
  mb: 2,
  borderLeftStyle: "solid",
  borderLeftWidth: "3px",
};

export default Alert;
