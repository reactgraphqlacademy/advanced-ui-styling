import React from "react";
import Image from "../../components/data-display/Image";
import Typography, { Text } from "../../components/data-display/Typography";
import List, { Item } from "../../components/layout/List";

const Page = () => (
  <React.Fragment>
    <Typography variant="h1">Image</Typography>
    <Text>
      Create a Typography component in{" "}
      <code>src/design-system/components/data-display/Image.js</code> composing
      it with the Box component and adding a margin bottom of 0.9rem using a
      prop. Hints, use:
    </Text>
    <List>
      <Item>1) styled(Box) </Item>
      <Item>2) Image.defaultProps</Item>
    </List>
    <Image
      maxWidth="100px"
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    />
  </React.Fragment>
);

export default Page;
