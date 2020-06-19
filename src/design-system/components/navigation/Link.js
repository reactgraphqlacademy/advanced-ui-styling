import React from "react";
import { Link as RRLink } from "react-router-dom";
import Box from "../layout/Box";

const Link = (props) => {
  return <Box {...props} />;
};

const GenericLink = ({ to, ...rest }) =>
  to && to.match(/^(https:\/\/*|http:\/\/*|mailto:*)/) ? (
    <a href={to} {...rest} />
  ) : (
    <RRLink to={to} {...rest} />
  );

Link.defaultProps = {
  as: GenericLink,
  color: "pink",
};

export default Link;
