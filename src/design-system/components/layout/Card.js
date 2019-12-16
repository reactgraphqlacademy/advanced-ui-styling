import styled from "styled-components";
import Box from "./Box";

const Card = styled(Box)``;

Card.defaultProps = {
  border: "1px solid",
  borderColor: "grey",
  shadow: "thin",
  borderRadius: 2,
  backgroundColor: "pink",
  display: " inline-block",
  overflow: "hidden",
  p: [1, 3]
};

export default Card;
