import React from "react";
import styled from "styled-components";
import {
  space,
  color,
  typography,
  border,
  shadow,
  layout,
  position,
  compose
} from "styled-system";

const css = compose(space, color, typography, border, shadow, layout, position);

const BaseBox = ({ sx, variant, box: Component = "div", ...rest }) => (
  <Component {...rest} />
);

const styleFunction = ({ sx, theme }) => css({ ...sx, theme });

const StyledBox = styled(BaseBox)(styleFunction);

const Box = ({ sx = {}, ...rest }) => (
  <StyledBox
    sx={{
      fontFamily: "monospace",
      color: "text",
      ...sx
    }}
    {...rest}
  />
);

Box.displayName = "Box";
