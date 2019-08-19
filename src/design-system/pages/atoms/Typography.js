import React from "react";
import Image from "../../components/data-display/Image";
import Typography, { Text } from "../../components/data-display/Typography";
import List, { Item } from "../../components/layout/List";

const Page = () => (
  <React.Fragment>
    <Typography variant="h1">Typography</Typography>
    <Typography variant="h2">Exercise part 1</Typography>
    <Text>
      Create a Typography component in{" "}
      <code>src/design-system/components/data-display/Typography.js</code>{" "}
      composing it with the Box component. The Typography componenent should
      render the following components:
    </Text>
    <List>
      <Item>
        h1: font size must be the 7th index from our design system fontSizes
        array
      </Item>
      <Item>
        h2: font size must be the 6th index from our design system fontSizes
        array. This should be the default variant
      </Item>
      <Item>
        h3: font size must be the 5th index from our design system fontSizes
        array
      </Item>
      <Item>
        p: font size must be the 2nd index from our design system fontSizes
        array
      </Item>
      <Item>
        span: font size must be the 2nd index from our design system fontSizes
        array
      </Item>
    </List>

    <Typography variant="h2">Exercise part 2</Typography>
    <Text>
      Refactor the Text component in{" "}
      <code>src/design-system/components/data-display/Typography.js</code> so
      the Text component is composed with the Typography component. The Text
      component should render as 'p' by default
    </Text>
  </React.Fragment>
);

export default Page;
