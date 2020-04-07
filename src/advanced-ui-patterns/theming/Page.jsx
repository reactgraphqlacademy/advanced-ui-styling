import React from "react";
import Example from "./example";
import Exercise from "./exercise";
import Typography, {
  Text,
} from "../../design-system/components/data-display/Typography";
import Link from "../../design-system/components/navigation/Link";

const Page = () => (
  <React.Fragment>
    <Typography variant="h2">Theming</Typography>
    <Text>
      styled-components has full theming support with the{" "}
      <code>
        <Link
          to="https://styled-components.com/docs/advanced#theming"
          target="_blank"
        >
          ThemeProvider
        </Link>
      </code>{" "}
      component. The ThemeProvider component provides a theme object to all the
      React components underneath via the context API. The `styled` function
      from styled-components injects a prop called `theme` with the theme
      object.
    </Text>
    <Text>
      Using a theme helps us share values and styles throughout different
      components. You can see the theme we are using in this example here
      <code>src/advanced-ui-patterns/theming/example/theme.js</code>.
    </Text>
    <Typography variant="h3">Example</Typography>
    <Example />
    <hr />
    <Typography variant="h3">Exercise</Typography>
    <Text>
      Go to <code>src/advanced-ui-patterns/theming/exercise/index</code> and
      follow the instructions of the exercise 🏋️‍♀️
    </Text>
    <Exercise />
  </React.Fragment>
);

export default Page;
