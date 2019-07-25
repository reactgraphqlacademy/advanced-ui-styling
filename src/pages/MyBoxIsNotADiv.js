import React from "react";
import Box from "../components/Box";

const Page = () => (
  <div>
    <h1>Flexbox</h1>
    <p>
      You can change the component that is rendered by using the <code>as</code>{" "}
      from styled components
    </p>
    <h2>Tasks</h2>
    <h3>Task 1</h3>
    <p>The following component should be a button with 2 rem padding</p>
    <p>
      <Box>I should be a button</Box>
    </p>
  </div>
);

export default Page;
