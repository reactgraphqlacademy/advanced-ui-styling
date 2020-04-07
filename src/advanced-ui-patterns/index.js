import React from "react";
import { Switch, Route } from "react-router-dom";
import Link from "../design-system/components/navigation/Link";
import List, { Item } from "../design-system/components/layout/List";
import ContextPage from "./context/Page";
import ThemingPage from "./theming/Page";

const Index = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/context`} component={ContextPage} />
    <Route path={`${match.url}/theming`} component={ThemingPage} />
  </Switch>
);

export const Menu = ({ path }) => (
  <List>
    <Item>
      <Link to={`${path}/theming`}>Theming</Link>
    </Item>
    <Item>
      <Link to={`${path}/context`}>Context</Link>
    </Item>
  </List>
);

export default Index;
