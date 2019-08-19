import React from "react";
import Link from "../../components/navigation/Link";
import Typography, { Text } from "../../components/data-display/Typography";
import List, { Item } from "../../components/layout/List";

const Page = () => (
  <React.Fragment>
    <Typography variant="h1">Link</Typography>
    <Text>
      Create a Link component in{" "}
      <code>src/design-system/components/navigation/Link.js</code> composing it
      with the Box component. These are the specs:
    </Text>
    <List>
      <Item>It should be composed with a Box component</Item>
      <Item>It should be composed with a Box component</Item>
      <Item>It should be rendered 'as' a Link from react-router-dom</Item>
    </List>
    <Link to="/">Home page link</Link>
  </React.Fragment>
);

export default Page;
