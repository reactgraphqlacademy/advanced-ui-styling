import React from "react";
import { Switch, Route, Link } from "react-router-dom";
// import { importMDX } from "mdx.macro";
import MyFirstBoxPage from "./pages/MyFirstBox";
import TypographyPage from "./pages/Typography";
import ColorPage from "./pages/Color";
import SpacingPage from "./pages/Spacing";
import FlexPage from "./pages/Flex";
import MyBoxIsNotADivPage from "./pages/MyBoxIsNotADiv";
import ResponsiveStylesPage from "./pages/ResponsiveStyles";
import VariantsPage from "./pages/Variants";
import ImagePage from "./pages/atoms/Image";

// const ImagePage = importMDX.sync("./components/data-display/Image.mdx");

const Index = ({ match }) => (
  <Switch>
    <Route exact path={`${match.url}`} component={MyFirstBoxPage} />
    <Route path={`${match.url}/typography`} component={TypographyPage} />
    <Route path={`${match.url}/color`} component={ColorPage} />
    <Route path={`${match.url}/spacing`} component={SpacingPage} />
    <Route path={`${match.url}/flex`} component={FlexPage} />
    <Route path={`${match.url}/not-a-div`} component={MyBoxIsNotADivPage} />
    <Route
      path={`${match.url}/responsive-styles`}
      component={ResponsiveStylesPage}
    />
    <Route path={`${match.url}/variant-props`} component={VariantsPage} />
    <Route path={`${match.url}/components/image`} component={ImagePage} />
  </Switch>
);

export const Menu = ({ path }) => (
  <ul>
    <li>
      Build a Box
      <ul>
        <li>
          <Link to={path}>My first box</Link>
        </li>
        <li>
          <Link to={`${path}/typography-attributes`}>
            Typography attributes
          </Link>
        </li>
        <li>
          <Link to={`${path}/color-attributes`}>Color attributes</Link>
        </li>
        <li>
          <Link to={`${path}/spacing-attributes`}>Spacing attributes</Link>
        </li>
      </ul>
    </li>
    <li>
      Specialize the Box
      <ul>
        <li>
          <Link to={`${path}/flex`}>Flex</Link>
        </li>
        <li>
          <Link to={`${path}/not-a-div`}>My box is not div now</Link>
        </li>
      </ul>
    </li>
    <li>
      <Link to={`${path}/responsive-styles`}>Responsive styles</Link>
    </li>
    <li>
      <Link to={`${path}/variant-props`}>Prop based variants</Link>
    </li>
    <li>
      Components
      <ul>
        <li>
          Atoms
          <ul>
            <li>
              <Link to={`${path}/components/image`}>Image</Link>
            </li>
            <li>
              <Link to={`${path}/`}>Typography</Link>
            </li>
            <li>
              <Link to={`${path}/`}>Button</Link>
            </li>
            <li>
              <Link to={`${path}/`}>LinkButton</Link>
            </li>
            <li>
              <Link to={`${path}/`}>Card</Link>
            </li>
          </ul>
        </li>
        <li>
          Molecules
          <ul>
            <li>
              <Link to={`${path}/`}>Search Input</Link>
            </li>
            <li>
              <Link to={`${path}/`}>Profile Card</Link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
);

export default Index;
