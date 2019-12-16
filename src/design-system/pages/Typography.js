import React from "react";
import styled from "styled-components";
import { typography } from "styled-system";

import Typography, { Text } from "../components/data-display/Typography";
import List, { Item } from "../components/layout/List";

const Box = styled.div`
  ${typography}
`;

const Page = () => (
  <React.Fragment>
    <Typography variant="h1">Typography</Typography>
    <Text>
      styled-system provides the following functions to style different
      typography properties
    </Text>
    <List>
      <Item>
        <code>fontFamily</code>
      </Item>
      <Item>
        <code>fontSize</code>
      </Item>
      <Item>
        <code>fontWeight</code>
      </Item>
      <Item>
        <code>lineHeight</code>
      </Item>
      <Item>
        <code>letterSpacing</code>
      </Item>
      <Item>
        <code>textAlign</code>
      </Item>
      <Item>
        <code>fontStyle</code>
      </Item>
    </List>
    <hr />
    <Typography variant="h2">Tasks</Typography>
    <Typography variant="h3">Task 1</Typography>
    <Text>
      Go to <code>src/theme.js</code> and edit the fontSizes in the theme so{" "}
      <code>&#60;Box fontSize=&#123; 3 &#125; /&#62;</code> returns a font size
      equals "1.25rem"
    </Text>
    <Text>
      You will know it works because <strong>text A</strong> will look bigger
      than <strong>text B</strong>:
    </Text>
    <Box fontSize={3}>text A</Box>
    <br />
    <Box fontSize={2}>text B</Box>

    <Typography variant="h3">Task 2</Typography>
    <Text>
      Why does the following prop textAlign="center" work if textAlign is not in{" "}
      <code>src/theme.js</code>?
    </Text>
    <Box style={{ width: "100%" }} textAlign="center" fontFamily="monospace">
      Am I centered?
    </Box>
    <Typography variant="h3">Task 3</Typography>
    <Text>
      Styled System also includes a function called <code>typograpy</code> that
      include the functions{" "}
      <code>
        fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign,
        and fontStyle
      </code>
      .
    </Text>
    <Text>
      Replace all the the styled system functions used in the Box component
      defined in <code>src/pages/Typography</code> with the{" "}
      <code>typography</code> function. Hint the <code>typography</code>{" "}
      function is already imported at the top of the file.
    </Text>
  </React.Fragment>
);

export default Page;
