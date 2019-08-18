import styled from "styled-components";
import { Link as RRLink } from "react-router-dom";
import Box from "../layout/Box";

const Link = styled(Box)``;

Link.defaultProps = {
  as: RRLink,
  color: "blue"
};

export default Link;
