import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import CompoundComponentsPage from "./compound-components/Page";
import ContextPage from "./context/Page";
import ThemingPage from "./theming/Page";

const Index = ({ match }) => (
  <Switch>
    <Route
      path={`${match.url}/compound-components`}
      component={CompoundComponentsPage}
    />
    <Route path={`${match.url}/context`} component={ContextPage} />
    <Route path={`${match.url}/theming`} component={ThemingPage} />
  </Switch>
);

export const Menu = ({ path }) => (
  <ul>
    <li>
      <Link to={`${path}/theming`}>Theming</Link>
    </li>
    <li>
      <Link to={`${path}/compound-components`}>Compound Components</Link>
    </li>
    <li>
      <Link to={`${path}/context`}>Context</Link>
    </li>
  </ul>
);

export default Index;
