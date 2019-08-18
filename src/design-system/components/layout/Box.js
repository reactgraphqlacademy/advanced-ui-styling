import styled from "styled-components";
import { space, color, typography, layout } from "styled-system";

const Box = styled.div`
  ${space}
  ${color}
  ${typography}
  ${layout}
`;
Box.defaultProps = {
  font: "monospace"
};

export default Box;
