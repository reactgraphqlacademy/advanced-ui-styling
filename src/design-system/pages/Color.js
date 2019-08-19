import React from "react";
import styled from "styled-components";
import { typography, color } from "styled-system";
import Typography, { Text } from "../components/data-display/Typography";

const Box = styled.div`
  ${typography}
  ${color}
`;

const Page = () => (
  <div>
    <Typography variant="h1">Color</Typography>
    <Text>
      We have included the <code>color</code> function from{" "}
      <code>styled-system</code> in our new Box component defined in{" "}
      <code>src/pages/Color.js</code>
    </Text>
    <Typography variant="h2">Tasks</Typography>
    <Text>
      Open <code>src/theme.js</code> and add a color blue that is equals to
      "rgb(97, 218, 251)"
    </Text>
    <Text>
      You will know it works because the following two blue texts will look
      different:
    </Text>
    <Box style={{ color: "blue" }}>Default font</Box>
    <Box color="blue">React blue!</Box>
  </div>
);

export default Page;
