import React from "react";
import styled from "styled-components";
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textAlign,
  fontStyle,
  typography
} from "styled-system";

const Box = styled.div`
  ${fontFamily}
  ${lineHeight}
  ${fontStyle}
  ${fontSize}
  ${fontWeight}
  ${letterSpacing}
  ${textAlign}
`;

const Page = () => (
  <React.Fragment>
    <h1>Typography</h1>
    <p>
      styled-system provides the following functions to style different
      typography properties
    </p>
    <ul>
      <li>
        <code>fontFamily</code>
      </li>
      <li>
        <code>fontSize</code>
      </li>
      <li>
        <code>fontWeight</code>
      </li>
      <li>
        <code>lineHeight</code>
      </li>
      <li>
        <code>letterSpacing</code>
      </li>
      <li>
        <code>textAlign</code>
      </li>
      <li>
        <code>fontStyle</code>
      </li>
    </ul>
    <hr />
    <h2>Tasks</h2>
    <h3>Task 1</h3>
    <p>
      Go to <code>src/theme.js</code> and edit the fontSizes in the theme so{" "}
      <code>&#60;Box fontSize=&#123; 3 &#125; /&#62;</code> returns a font size
      equals "1.25rem"
    </p>
    <p>
      You will know it works because <strong>text A</strong> will look bigger
      than <strong>text B</strong>:
    </p>
    <Box fontSize={3}>text A</Box>
    <br />
    <Box fontSize={2}>text B</Box>

    <h3>Task 2</h3>
    <p>
      Why does the following prop textAlign="center" work if textAlign is not in{" "}
      <code>src/theme.js</code>?
    </p>
    <Box style={{ width: "100%" }} textAlign="center" fontFamily="monospace">
      Am I centered?
    </Box>

    <h3>Task 3</h3>
    <p>
      Styled System also includes a function called <code>typograpy</code> that
      include the functions{" "}
      <code>
        fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign,
        and fontStyle
      </code>
      .
    </p>
    <p>
      Replace all the the styled system functions used in the Box component
      defined in <code>src/pages/Typography</code> with the{" "}
      <code>typography</code> function. Hint the <code>typography</code>{" "}
      function is already imported at the top of the file.
    </p>
  </React.Fragment>
);

export default Page;
