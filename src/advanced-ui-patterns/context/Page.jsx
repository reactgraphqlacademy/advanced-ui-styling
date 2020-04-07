import React from "react";
import { Helmet } from "react-helmet";

import Typography, {
  Text,
} from "../../design-system/components/data-display/Typography";
import Example from "./example";
import Exercise from "./exercise";
import Modal from "./example/Modal";

const Page = () => (
  <Modal>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous"
      />
    </Helmet>
    <Typography variant="h2">Context</Typography>
    <Typography variant="h3">Example</Typography>

    <Example />
    <Text>
      <em>Folder: src/advanced-ui-patterns/context/example/Modal.jsx</em>
    </Text>
    <Typography variant="h3">Exercise</Typography>
    <Text>
      We are going to create a <strong>Theme Switcher</strong> component using
      Context. Go to{" "}
      <code>src/advanced-ui-patterns/context/exercise/ThemeProvider.jsx</code>{" "}
      and follow the tasks. You'll know it works when you click on the "Theme
      Switcher" button and the Hero Component colors change.
    </Text>
    <Exercise />
    <hr />
    <Typography variant="h3">Bonus Exercise</Typography>
    <Text>
      Implement the Redux Provider in
      <code>src/components/patterns/Context/xbonus/Provider.js</code>. Once
      implemented, use it in Root.js
    </Text>
  </Modal>
);

export default Page;
