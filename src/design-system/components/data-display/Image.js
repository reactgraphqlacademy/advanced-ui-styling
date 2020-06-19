import React from "react";
import Box from "../layout/Box";

const Image = (props) => <Box {...props} />;
Image.defaultProps = {
  mb: 1,
  as: "img",
};

export default Image;
