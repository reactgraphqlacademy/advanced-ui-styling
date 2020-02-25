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
      <Item>
        It should be rendered 'as' the 'GenericLink' defined in the same file
      </Item>
      <Item>The color should be primary</Item>
    </List>
    <Link to="/">Home page link</Link>
  </React.Fragment>
);

export default Page;
