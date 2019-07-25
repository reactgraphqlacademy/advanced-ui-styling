import React from "react";
import styled from "styled-components";
import { typography, color, space } from "styled-system";

const Box = styled.div`
  ${typography}
  ${color}
  ${space}
`;

const Page = () => (
  <div>
    <h1>Spacing</h1>
    <p>
      There are different set of functions that can use the space defined in the
      theme, like <code>space</code>, <code>layout</code> or{" "}
      <code>postion</code>:
    </p>
    <p>
      We are going to start with the <code>space</code> utility. The layout
      utility includes style props for:
    </p>
    <ul>
      <li>
        <code>width</code>
      </li>
      <li>
        <code>height</code>
      </li>
      <li>
        <code>display</code>
      </li>
      <li>
        <code>minWidth</code>
      </li>
      <li>
        <code>minHeight</code>
      </li>
      <li>
        <code>maxWidth</code>
      </li>
      <li>
        <code>maxHeight</code>
      </li>
      <li>
        <code>size</code>
      </li>
      <li>
        <code>verticalAlign</code>
      </li>
    </ul>
    <p>
      We are going to start with the <code>layout</code> utility. We have
      imported it from <code>styled-system</code> and included it in our new Box
      component defined in <code>src/pages/Spacing.js</code>
    </p>
    <h2>Tasks</h2>
    <h3>Task 1</h3>
    <p>
      Go to <code>src/pages/Spacing.js</code> and add a 4rem padding to the
      following Box using the space defined in the theme. Hint you can use the
      props <code>p</code> or <code>padding</code>
    </p>
    <Box>Hello padding</Box>
    <h3>Task 2</h3>
    <p>
      Go to <code>src/pages/Spacing.js</code> and a padding of 4rem on the left
      and right, and 0 on the top and bottom to the following Box using the
      space defined in the theme. Hint you need to use the props <code>px</code>{" "}
      and <code>py</code>
    </p>
    <Box>Hello padding</Box>
    <h3>Task 3</h3>
    <p>
      Go to <code>src/pages/Spacing.js</code> and a padding of 4rem on the left
      and right, 0 on the top and 3rem on bottom to the following Box using the
      space defined in the theme. Hint you need to use the props <code>px</code>{" "}
      , <code>pb</code>, and <code>pt</code>
    </p>
    <Box>Hello padding</Box>
  </div>
);

export default Page;
