import React from "react";
import styled from "styled-components";
import { typography, color, space } from "styled-system";

import Typography, { Text } from "../components/data-display/Typography";
import List, { Item } from "../components/layout/List";

const Box = styled.div`
  ${typography}
  ${color}
  ${space}
`;

const Page = () => (
  <div>
    <Typography variant="h1">Spacing</Typography>
    <Text>
      There are different set of functions that can use the space defined in the
      theme, like <code>space</code>, <code>layout</code> or{" "}
      <code>postion</code>:
    </Text>
    <Text>
      We are going to start with the <code>space</code> utility. The layout
      utility includes style props for:
    </Text>
    <List>
      <Item>
        <code>width</code>
      </Item>
      <Item>
        <code>height</code>
      </Item>
      <Item>
        <code>display</code>
      </Item>
      <Item>
        <code>minWidth</code>
      </Item>
      <Item>
        <code>minHeight</code>
      </Item>
      <Item>
        <code>maxWidth</code>
      </Item>
      <Item>
        <code>maxHeight</code>
      </Item>
      <Item>
        <code>size</code>
      </Item>
      <Item>
        <code>verticalAlign</code>
      </Item>
    </List>
    <Text>
      We are going to start with the <code>layout</code> utility. We have
      imported it from <code>styled-system</code> and included it in our new Box
      component defined in <code>src/pages/Spacing.js</code>
    </Text>
    <Typography variant="h2">Tasks</Typography>
    <Typography variant="h3">Task 1</Typography>
    <Text>
      Go to <code>src/pages/Spacing.js</code> and add a 4rem padding to the
      following Box using the space defined in the theme. Hint you can use the
      props <code>p</code> or <code>padding</code>
    </Text>
    <Box>Hello padding</Box>
    <Typography variant="h3">Task 2</Typography>
    <Text>
      Go to <code>src/pages/Spacing.js</code> and a padding of 4rem on the left
      and right, and 0 on the top and bottom to the following Box using the
      space defined in the theme. Hint you need to use the props <code>px</code>{" "}
      and <code>py</code>
    </Text>
    <Box>Hello padding</Box>
    <Typography variant="h3">Task 3</Typography>
    <Text>
      Go to <code>src/pages/Spacing.js</code> and a padding of 4rem on the left
      and right, 0 on the top and 3rem on bottom to the following Box using the
      space defined in the theme. Hint you need to use the props <code>px</code>{" "}
      , <code>pb</code>, and <code>pt</code>
    </Text>
    <Box>Hello padding</Box>
  </div>
);

export default Page;
