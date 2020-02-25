import React from "react";
import Typography, { Text } from "../../components/data-display/Typography";
import List, { Item } from "../../components/layout/List";
import Alert from "../../components/feedback/Alert";
import Link from "../../components/navigation/Link";

const Page = () => (
  <React.Fragment>
    <Typography variant="h1">List</Typography>
    <Text>
      Refactor the List component in{" "}
      <code>src/design-system/components/layout/List.js</code> so it implements
      the following specs:
    </Text>
    <List>
      <Item>list-style should be none by default</Item>
    </List>

    <Alert variant="warning">
      Heads up! There are no styled-system functions for all the styles{" "}
      <Link
        target="_blank"
        to="https://github.com/styled-system/styled-system/issues/195"
      >
        https://github.com/styled-system/styled-system/issues/195
      </Link>
      <Text>Styled System doesn't have any function for list-style</Text>
    </Alert>
  </React.Fragment>
);

export default Page;
