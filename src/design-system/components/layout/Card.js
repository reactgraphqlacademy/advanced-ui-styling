import React from "react";
import Box from "./Box";

const Card = (props) => <Box {...props} />;

Card.defaultProps = {
  border: "1px solid",
  borderColor: "grey",
  shadow: "thin",
  borderRadius: 2,
  backgroundColor: "pink",
  display: " inline-block",
  overflow: "hidden",
  p: [1, 3],
};

export default Card;
