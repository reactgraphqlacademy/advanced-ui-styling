import React from "react";
import Link from "../../components/navigation/Link";
import Typography, { Text } from "../../components/data-display/Typography";
import List, { Item } from "../../components/layout/List";
import Alert from "../../components/feedback/Alert";

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
      <Item>It should be rendered 'as' a Link from react-router-dom</Item>
      <Item>The color should be pink</Item>
      <Item>The link should not be underlined</Item>
    </List>
    <Alert variant="warning">
      Heads-up! There are no styled-system functions for all the styles{" "}
      <Link
        target="_blank"
        to="https://github.com/styled-system/styled-system/issues/195"
      >
        https://github.com/styled-system/styled-system/issues/195
      </Link>
    </Alert>
    <Link to="/">Home page link</Link>
  </React.Fragment>
);

export default Page;
