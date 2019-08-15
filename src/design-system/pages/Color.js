import React from "react";
import styled from "styled-components";
import { typography, color } from "styled-system";

const Box = styled.div`
  ${typography}
  ${color}
`;

const Page = () => (
  <div>
    <h1>Color</h1>
    <p>
      We have included the <code>color</code> function from{" "}
      <code>styled-system</code> in our new Box component defined in{" "}
      <code>src/pages/Color.js</code>
    </p>
    <h2>Tasks</h2>
    <h3>Task 1</h3>
    <p>
      Go to <code>src/theme.js</code> and add a color blue that is equals to
      "rgb(97, 218, 251)"
    </p>
    <p>
      You will know it works because the following two blue texts will look
      different:
    </p>
    <Box style={{ color: "blue" }}>Default font</Box>
    <Box color="blue">React blue!</Box>
  </div>
);

export default Page;
