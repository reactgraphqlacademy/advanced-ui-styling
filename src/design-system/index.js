import React from "react";
import { Switch, Route } from "react-router-dom";
// import { importMDX } from "mdx.macro";
import Link from "./components/navigation/Link";
import { Text } from "./components/data-display/Typography";
import List, { Item } from "./components/layout/List";
import MyFirstBoxPage from "./pages/MyFirstBox";
import TypographyPage from "./pages/Typography";
import ColorPage from "./pages/Color";
import SpacingPage from "./pages/Spacing";
import FlexPage from "./pages/Flex";
import MyBoxIsNotADivPage from "./pages/MyBoxIsNotADiv";
import ResponsiveStylesPage from "./pages/ResponsiveStyles";
import VariantsPage from "./pages/VariantProp";
import ImagePage from "./pages/ui-library/Image";
import TypographyAtomsPage from "./pages/ui-library/Typography";
import LinkPage from "./pages/ui-library/Link";
import CardPage from "./pages/ui-library/Card";
import ListPage from "./pages/ui-library/List";
import SxPropPage from "./pages/bonus";

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
    <Route path={`${match.url}/ui-library/image`} component={ImagePage} />
    <Route path={`${match.url}/ui-library/card`} component={CardPage} />
    <Route
      path={`${match.url}/ui-library/typography`}
      component={TypographyAtomsPage}
    />
    <Route path={`${match.url}/ui-library/link`} component={LinkPage} />
    <Route path={`${match.url}/ui-library/list`} component={ListPage} />
    <Route path={`${match.url}/sx-prop`} component={SxPropPage} />
  </Switch>
);

export const Menu = ({ path }) => (
  <List>
    <Item>
      <Text>Build a Box</Text>
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
      <Text>Specialize the Box</Text>
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
      <Link to={`${path}/variant-props`}>Variant prop</Link>
    </Item>
    <Item>
      <Text>My UI Component Library</Text>
      <List>
        <Item>
          <Link to={`${path}/ui-library/image`}>Image</Link>
        </Item>
        <Item>
          <Link to={`${path}/ui-library/link`}>Link</Link>
        </Item>
        <Item>
          <Link to={`${path}/ui-library/list`}>List</Link>
        </Item>
        <Item>
          <Link to={`${path}/ui-library/card`}>Card</Link>
        </Item>
        <Item>
          <Link to={`${path}/ui-library/typography`}>Typography</Link>
        </Item>
      </List>
    </Item>
    <Item>
      <Link to={`${path}/sx-prop`}>Bonus: sx prop</Link>
    </Item>
  </List>
);

export default Index;
