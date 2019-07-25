import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import MyFirstBox from "./pages/MyFirstBox";
import Typography from "./pages/Typography";
import Color from "./pages/Color";
import Spacing from "./pages/Spacing";
import Flex from "./pages/Flex";
import MyBoxIsNotADiv from "./pages/MyBoxIsNotADiv";
import ResponsiveStyles from "./pages/ResponsiveStyles";

const App = () => (
  <div style={{ display: "flex" }}>
    <div style={{ width: "280px" }}>
      <ul>
        <li>
          Build a Box
          <ul>
            <li>
              <Link to="/">My first box</Link>
            </li>
            <li>
              <Link to="/typography">Typography</Link>
            </li>
            <li>
              <Link to="/color">Color</Link>
            </li>
            <li>
              <Link to="/spacing">Spacing</Link>
            </li>
          </ul>
        </li>
        <li>
          Specialize the Box
          <ul>
            <li>
              <Link to="/flex">Flex</Link>
            </li>
            <li>
              <Link to="/not-a-div">My box is not div now</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/responsive-styles">Responsive styles</Link>
        </li>

        <li>
          Variants
          <ul>
            <li>
              <Link to="/variant-css-object">CSS style objects based</Link>
            </li>
            <li>
              <Link to="/variant-props">Props based</Link>
            </li>
          </ul>
        </li>

        <li>
          Components
          <ul>
            <li>
              Atoms
              <ul>
                <li>
                  <Link to="/">Button</Link>
                </li>
                <li>
                  <Link to="/">LinkButton</Link>
                </li>
                <li>
                  <Link to="/">Input</Link>
                </li>
                <li>
                  <Link to="/">Card</Link>
                </li>
              </ul>
            </li>
            <li>
              Molecules
              <ul>
                <li>
                  <Link to="/">Search Input</Link>
                </li>
                <li>
                  <Link to="/">Profile Card</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div style={{ flex: 1 }}>
      <Switch>
        <Route exact path="/" component={MyFirstBox} />
        <Route path="/typography" component={Typography} />
        <Route path="/color" component={Color} />
        <Route path="/spacing" component={Spacing} />
        <Route path="/flex" component={Flex} />
        <Route path="/not-a-div" component={MyBoxIsNotADiv} />
        <Route path="/responsive-styles" component={ResponsiveStyles} />
      </Switch>
    </div>
  </div>
);

export default App;
