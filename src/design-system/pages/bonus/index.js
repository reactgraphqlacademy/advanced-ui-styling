import React from "react";
import styled from "styled-components";
import { variant } from "styled-system";
import Box from "../../components/layout/Box";
import Typography, { Text } from "../../components/data-display/Typography";
import Alert from "../../components/feedback/Alert";
import Link from "../../components/navigation/Link";

/*
Exercise:
*/
const Page = () => (
  <div>
    <Typography variant="h1">Sx prop</Typography>
    <Text>
      The{" "}
      <Link to="https://theme-ui.com/sx-prop/" target="_blank">
        sx prop
      </Link>{" "}
      helps you namespace your style props, which makes it very easy to operate
      with them.
    </Text>

    <Text>
      One of the useful things you can do is to{" "}
      <Link
        to="https://github.com/styled-components/styled-components/issues/439#issuecomment-570640411"
        target="_blank"
      >
        remove props from HTML elements
      </Link>{" "}
    </Text>
    <Text>
      Theme UI is a UI component library for React that uses{" "}
      <Link
        to="https://github.com/system-ui/theme-ui/blob/master/packages/components/src/Box.js#L4"
        target="_blank"
      >
        styled system
      </Link>
    </Text>

    <Typography variant="h2">Exercise</Typography>

    <Text>
      Refactor your UI component library to use the Box in{" "}
      <code>src/design-system/pages/bonus/Box.js</code> instead of{" "}
      <code>src/design-system/components/layout/Box.js</code>.
    </Text>

    <Typography variant="h2">Example</Typography>
    <code>
      const Image = (&#123;sx, ...rest&#125;) => &lt;Box sx=&#123;&#123;mb:
      1&#125;&#125; as="img" &#123;...rest&#125; />;
    </code>
    <Typography variant="h2">Note</Typography>
    <Text>
      Notice that now you won't have to import styled from styled-components, do
      the CSS-in-JS library is an implementation detail not specific to this
      component.
    </Text>
  </div>
);

export default Page;
