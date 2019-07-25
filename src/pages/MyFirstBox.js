import React from "react";
import styled from "styled-components";
// import { fontFamily } from "styled-system";

const fontFamily = ({ theme, fontFamily }) => {
  return `font-family: ${`return here a font from the theme.fonts based on the fontFamily argument`};`;
};

const Box = styled.div`
  ${fontFamily}
`;

const Page = () => (
  <div>
    <h1>My first Box</h1>
    <p>In this page we are using our first Box</p>
    <h2>Tasks</h2>
    <h3>Task 1</h3>
    <p>
      Go to <code>src/pages/MyFirstBox</code> and edit the fontFamily function
      so it returns a font family from the <code>src/theme.js</code> based on
      the fontFamily argument
    </p>
    <p>
      You will know it works because the following text will look different from
      each other.
    </p>
    <Box>Default font</Box>
    <Box fontFamily="monospace">Monospace font</Box>
    <h3>Task 2</h3>
    <p>
      The default font should be "sansSerif". Tip: use{" "}
      <code>Box.defaultProps = &#123; &#125; </code>
    </p>
    <h3>Task 3</h3>
    <p>
      Replace your fontFamily function with the one imported from
      "styled-system". Hint: the function is already imported at the top ot the
      file but it's commented out.
      <code>Box.defaultProps = &#123; &#125; </code>
    </p>
  </div>
);

export default Page;
