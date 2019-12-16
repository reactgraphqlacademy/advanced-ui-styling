import styled from "styled-components";
import { space, color, typography, layout, border } from "styled-system";

const Box = styled.div`
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${border}
`;
Box.defaultProps = {
  fontFamily: "barlow"
};

export default Box;
