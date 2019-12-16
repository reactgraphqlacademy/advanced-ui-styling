import React from "react";
import styled from "styled-components";
import { typography, color, space, layout, flexbox } from "styled-system";
import Typography, { Text } from "../components/data-display/Typography";
import List, { Item } from "../components/layout/List";

const Box = styled.div`
    ${space}
    ${color}
    ${typography}
    ${layout}
`;

const Flex = styled(Box)`
  ${flexbox}
`;

Flex.defaultProps = {
  display: "flex"
};

const Page = () => (
  <div>
    <Typography variant="h1">Flexbox</Typography>
    <Text>
      styled-system provides the following functions to style different flex
      properties
    </Text>
    <List>
      <Item>
        <code>alignItems</code>
      </Item>
      <Item>
        <code>alignContent</code>
      </Item>
      <Item>
        <code>justifyItems</code>
      </Item>
      <Item>
        <code>justifyContent</code>
      </Item>
      <Item>
        <code>flexWrap</code>
      </Item>
      <Item>
        <code>flexDirection</code>
      </Item>
      <Item>
        <code>flex</code>
      </Item>
      <Item>
        <code>flexGrow</code>
      </Item>
      <Item>
        <code>flexShrink</code>
      </Item>
      <Item>
        <code>flexBasis</code>
      </Item>
      <Item>
        <code>justifySelf</code>
      </Item>
      <Item>
        <code>alignSelf</code>
      </Item>
      <Item>
        <code>order</code>
      </Item>
    </List>
    <Typography variant="h2">Tasks</Typography>
    <Text>
      Remeber, every Styled System utility that we add to our Box will increase
      the time required to calculate its style. It's better to create another
      specialized component that adds the flexbox functions. This way when we
      don't need to use any flexbox property then we use the Box component. When
      we need to add flexbox properties then we use the Flex component.
    </Text>
    <Text>
      If you go to <code>src/pages/Flex.js</code> and look at our implementation
      you'll notice that our Flex component is adding <code>typography</code>,{" "}
      <code>color</code>, <code>layout</code>, and <code>space</code>, as well
      as <code>flexbox</code>. The reason is we want all our components to have
      a minimum common set of styles available via props.
    </Text>
    <Text>
      Instead of adding the <code>typography</code>, <code>color</code>,{" "}
      <code>layout</code>, and <code>space</code> in our Flex component you
      should extend the Box component and only add <code>flexbox</code> to this
      case. Hint:{" "}
      <a
        target="_blank"
        href="https://www.styled-components.com/docs/basics#extending-styles"
      >
        {" "}
        https://www.styled-components.com/docs/basics#extending-styles
      </a>
    </Text>
    <Flex>
      <div style={{ backgroundColor: "red" }}>half of the space</div>
      <div style={{ backgroundColor: "blue" }}>half of the space</div>
    </Flex>
  </div>
);

export default Page;
