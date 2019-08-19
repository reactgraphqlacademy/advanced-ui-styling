import React from "react";
import { Switch, Route, Link } from "react-router-dom";
// import { importMDX } from "mdx.macro";
import List, { Item } from "./components/layout/List";
import MyFirstBoxPage from "./pages/MyFirstBox";
import TypographyPage from "./pages/Typography";
import ColorPage from "./pages/Color";
import SpacingPage from "./pages/Spacing";
import FlexPage from "./pages/Flex";
import MyBoxIsNotADivPage from "./pages/MyBoxIsNotADiv";
import ResponsiveStylesPage from "./pages/ResponsiveStyles";
import VariantsPage from "./pages/Variants";
import ImagePage from "./pages/atoms/Image";
import TypographyAtomsPage from "./pages/atoms/Typography";
import LinkPage from "./pages/atoms/Link";
import CardPage from "./pages/atoms/Card";

// const ImagePage = importMDX.sync("./components/data-display/Image.mdx");

const Index = ({ match }) => (
  <Switch>
    <Route exact path={`${match.url}`} component={MyFirstBoxPage} />
    <Route
      path={`${match.url}/typography-attributes`}
      component={TypographyPage}
    />
    <Route path={`${match.url}/color-attributes`} component={ColorPage} />
    <Route path={`${match.url}/spacing-attributes`} component={SpacingPage} />
    <Route path={`${match.url}/flex`} component={FlexPage} />
    <Route path={`${match.url}/not-a-div`} component={MyBoxIsNotADivPage} />
    <Route
      path={`${match.url}/responsive-styles`}
      component={ResponsiveStylesPage}
    />
    <Route path={`${match.url}/variant-props`} component={VariantsPage} />
    <Route path={`${match.url}/atoms/image`} component={ImagePage} />
    <Route path={`${match.url}/atoms/card`} component={CardPage} />
    <Route
      path={`${match.url}/atoms/typography`}
      component={TypographyAtomsPage}
    />
    <Route path={`${match.url}/atoms/link`} component={LinkPage} />
  </Switch>
);

export const Menu = ({ path }) => (
  <List>
    <Item>
      Build a Box
      <List>
        <Item>
          <Link to={path}>My first box</Link>
        </Item>
        <Item>
          <Link to={`${path}/typography-attributes`}>
            Typography attributes
          </Link>
        </Item>
        <Item>
          <Link to={`${path}/color-attributes`}>Color attributes</Link>
        </Item>
        <Item>
          <Link to={`${path}/spacing-attributes`}>Spacing attributes</Link>
        </Item>
      </List>
    </Item>
    <Item>
      Specialize the Box
      <List>
        <Item>
          <Link to={`${path}/flex`}>Flex</Link>
        </Item>
        <Item>
          <Link to={`${path}/not-a-div`}>My box is not div now</Link>
        </Item>
      </List>
    </Item>
    <Item>
      <Link to={`${path}/responsive-styles`}>Responsive styles</Link>
    </Item>
    <Item>
      <Link to={`${path}/variant-props`}>Prop based variants</Link>
    </Item>
    <Item>
      Components
      <List>
        <Item>
          Atoms
          <List>
            <Item>
              <Link to={`${path}/atoms/image`}>Image</Link>
            </Item>
            <Item>
              <Link to={`${path}/atoms/card`}>Card</Link>
            </Item>
            <Item>
              <Link to={`${path}/atoms/typography`}>Typography</Link>
            </Item>
            <Item>
              <Link to={`${path}/atoms/link`}>Link</Link>
            </Item>
          </List>
        </Item>
        <Item>
          Molecules
          <List>
            <Item>
              <Link to={`${path}/molecule/profile-card`}>Profile Card</Link>
            </Item>
          </List>
        </Item>
        <Item>
          Organism
          <List>
            <Item>
              <Link to={`${path}/organism/users`}>Users component</Link>
            </Item>
          </List>
        </Item>
      </List>
    </Item>
  </List>
);

export default Index;
