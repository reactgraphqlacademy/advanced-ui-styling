import React from "react";
import Typography, { Text } from "../../components/data-display/Typography";
import List, { Item } from "../../components/layout/List";
import Link from "../../components/navigation/Link";

const Page = () => (
  <React.Fragment>
    <Typography variant="h1">Typography</Typography>
    <Typography variant="h2">Exercise part 1</Typography>
    <Text>
      Create a Typography component in{" "}
      <code>src/design-system/components/data-display/Typography.js</code>{" "}
      composing it with the Box component. The Typography componenent should
      render the following components:
    </Text>
    <List>
      <Item>
        h1: font size must be the 7th index from our design system fontSizes
        array
      </Item>
      <Item>
        h2: font size must be the 6th index from our design system fontSizes
        array. This should be the default variant
      </Item>
      <Item>
        h3: font size must be the 5th index from our design system fontSizes
        array
      </Item>
      <Item>
        p: font size must be the 2nd index from our design system fontSizes
        array
      </Item>
      <Item>
        span: font size must be the 2nd index from our design system fontSizes
        array
      </Item>
    </List>

    <Typography variant="h2">Exercise part 2</Typography>
    <Text>
      Refactor the Text component in{" "}
      <code>src/design-system/components/data-display/Typography.js</code> so
      the Text component is composed with the Typography component. The Text
      component should render as 'p' by default
    </Text>

    <Typography variant="h2">Exercise part 3</Typography>
    <Text>
      Choose a font from{" "}
      <Link to="https://fonts.google.com/">https://fonts.google.com/</Link> and
      apply it to all the text on the site. Steps:
    </Text>

    <List>
      <Item>
        Import the font in your app. You can create a font.css file in src and
        add it there. Then in 'src/App.js' you can do{" "}
        <code>import './fonts.css'</code>
      </Item>
      <Item>
        Map the font name to a key in the 'fonts' object inside{" "}
        <code>src/theme.js</code>
      </Item>
      <Item>
        Update the 'src/design-system/components/layout/Box' so it has a default
        prop called 'fontFamily' equals "key of your font in the theme"
      </Item>
    </List>
  </React.Fragment>
);

export default Page;
