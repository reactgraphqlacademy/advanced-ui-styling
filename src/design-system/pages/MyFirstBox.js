import React from "react";
import styled from "styled-components";
// import { fontFamily } from "styled-system";
import Typography, { Text } from "../components/data-display/Typography";

const fontFamily = ({ theme, fontFamily }) => {
  return `font-family: ${`return here a font from the theme.fonts based on the font argument`};`;
};

const Box = styled.div`
  ${fontFamily}
`;

const Page = () => (
  <div>
    <Typography variant="h1">My first Box</Typography>
    <Text>In this page we are using our first Box</Text>
    <Typography variant="h2">Tasks</Typography>
    <Typography variant="h3">Task 1</Typography>
    <Text>
      Go to <code>src/pages/MyFirstBox</code> and edit the fontFamily function
      so it returns a font family from the <code>src/theme.js</code> based on
      the fontFamily argument
    </Text>
    <Text>
      You will know it works because the following text will look different from
      each other.
    </Text>
    <Box>Default font</Box>
    <Box fontFamily="monospace">Monospace font</Box>
    <Typography variant="h3">Task 2</Typography>
    <Text>
      The default font should be "sansSerif". Tip: use{" "}
      <code>Box.defaultProps = &#123; &#125; </code>
    </Text>
    <Typography variant="h3">Task 3</Typography>
    <Text>
      Replace your fontFamily function with the one imported from
      "styled-system". Hint: the function is already imported at the top ot the
      file but it's commented out.
      <code>Box.defaultProps = &#123; &#125; </code>
    </Text>
  </div>
);

export default Page;
