import React from "react";
import styled from "styled-components";
import { typography, color, space, layout, flexbox } from "styled-system";

const Flex = styled.div`
    ${space}
    ${color}
    ${typography}
    ${layout}
    ${flexbox}
`;

Flex.defaultProps = {
  display: "flex"
};

const Page = () => (
  <div>
    <h1>Flexbox</h1>
    <p>
      styled-system provides the following functions to style different flex
      properties
    </p>
    <ul>
      <li>
        <code>alignItems</code>
      </li>
      <li>
        <code>alignContent</code>
      </li>
      <li>
        <code>justifyItems</code>
      </li>
      <li>
        <code>justifyContent</code>
      </li>
      <li>
        <code>flexWrap</code>
      </li>
      <li>
        <code>flexDirection</code>
      </li>
      <li>
        <code>flex</code>
      </li>
      <li>
        <code>flexGrow</code>
      </li>
      <li>
        <code>flexShrink</code>
      </li>
      <li>
        <code>flexBasis</code>
      </li>
      <li>
        <code>justifySelf</code>
      </li>
      <li>
        <code>alignSelf</code>
      </li>
      <li>
        <code>order</code>
      </li>
    </ul>
    <h2>Tasks</h2>
    <h3>Task 1</h3>
    <p>
      Remeber, every Styled System utility that we add to our Box will increase
      the time required to calculate its style. It's better to create another
      specialized component that adds the flexbox functions. This way when we
      don't need to use any flexbox property then we use the Box component. When
      we need to add flexbox properties then we use the Flex component.
    </p>
    <p>
      If you go to <code>src/pages/Flex.js</code> and look at our implementation
      you'll notice that our Flex component is adding <code>typography</code>,{" "}
      <code>color</code>, <code>layout</code>, and <code>space</code>, as well
      as <code>flexbox</code>. The reason is we want all our components to have
      a minimum common set of styles available via props.
    </p>
    <p>
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
    </p>
    <Flex>
      <div style={{ backgroundColor: "red" }}>half of the space</div>
      <div style={{ backgroundColor: "blue" }}>half of the space</div>
    </Flex>
  </div>
);

export default Page;
