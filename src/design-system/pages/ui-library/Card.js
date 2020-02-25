import React from "react";
import Image from "../../components/data-display/Image";
import Typography, { Text } from "../../components/data-display/Typography";
import List, { Item } from "../../components/layout/List";
import Card from "../../components/layout/Card";

const Page = () => (
  <React.Fragment>
    <Typography variant="h1">Card</Typography>
    <Text>
      Create a Card component in{" "}
      <code>src/design-system/components/layout/Card.js</code> composing it with
      the Box component with the following styles:
    </Text>
    <List>
      <Item>Border of 1px solid grey </Item>
      <Item>Thin shadow from the theme</Item>
      <Item>Padding 3 from the theme on desktop and padding 1 on mobile</Item>
      <Item>Border radius 2 from the theme</Item>
      <Item>overflow hidden</Item>
      <Item>background color primary</Item>
      <Item>display inline-block</Item>
    </List>
    <Card>
      <Image
        style={{ maxWidth: "300px" }}
        maxWidth="100px"
        src="https://reactgraphql.academy/static/d874cfe898772f874abeeaed5bd95a6e/a7715/mentorship.jpg"
      />
      <Text>React GraphQL Academy Coaches</Text>
    </Card>
  </React.Fragment>
);

export default Page;
