import React from "react";
import Box from "../components/layout/Box";
import Typography, { Text } from "../components/data-display/Typography";
import Link from "../components/navigation/Link";

const Page = () => (
  <div>
    <Typography variant="h1">My Box is not a div</Typography>
    <Text>
      You can change the component that is rendered by using the <code>as</code>{" "}
      from styled components
    </Text>
    <Typography variant="h2">Tasks</Typography>
    <Typography variant="h3">Task 1</Typography>
    <Text>
      The following component should be a button with 2 rem padding. Hint{" "}
      <Link
        target="_blank"
        href="https://www.styled-components.com/docs/api#as-polymorphic-prop"
      >
        https://www.styled-components.com/docs/api#as-polymorphic-prop
      </Link>
    </Text>
    <Text>
      <Box>I should be a button</Box>
    </Text>
  </div>
);

export default Page;
