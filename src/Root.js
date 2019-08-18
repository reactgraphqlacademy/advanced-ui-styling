import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";

import App from "./App";
import theme from "./theme";

const components = {
  pre: props => <div {...props} />,
  code: props => <pre style={{ color: "tomato" }} {...props} />
};

const Root = () => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>
      <Router>
        <App />
      </Router>
    </MDXProvider>
  </ThemeProvider>
);

export default Root;
