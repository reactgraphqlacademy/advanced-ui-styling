import React from "react";
import Example from "./example";
import Exercise from "./exercise";

const Page = (props) => (
  <div>
    <h2>Theming</h2>
    <p>
      styled-components has full theming support with the{" "}
      <code>
        <a
          href="https://styled-components.com/docs/advanced#theming"
          target="_blank"
        >
          ThemeProvider
        </a>
      </code>{" "}
      component. The ThemeProvider component provides a theme object to all the
      React components underneath via the context API. The `styled` function
      from styled-components injects a prop called `theme` with the theme
      object.
    </p>
    <p>
      Using a theme helps us share values and styles throughout different
      components. You can see the theme we are using in this example here
      <code>src/advanced-ui-patterns/theming/example/theme.js</code>.
    </p>
    <h3>Example</h3>
    <Example />
    <hr />
    <h3>Exercise</h3>
    <p>
      Go to <code>src/advanced-ui-patterns/theming/exercise/index</code> and
      follow the instructions of the exercise 🏋️‍♀️
    </p>
    <Exercise />
  </div>
);

export default Page;
