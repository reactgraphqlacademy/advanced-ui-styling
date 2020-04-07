import React from "react";
import { Switch, Route } from "react-router-dom";
import "normalize.css";
import DesignSystem, { Menu as DesignSystemsMenu } from "./design-system";
import AdvancedUIPatterns, {
  Menu as AdvUIPatternsMenu,
} from "./advanced-ui-patterns";
import Box from "./design-system/components/layout/Box";
import Flex from "./design-system/components/layout/Flex";

const ADV_UI_PATH = "/advanced-ui-patterns";
const DESIGN_SYSTEMS_PATH = "/design-system";

const App = () => (
  <Route
    render={({ location }) => {
      console.log(
        'location.pathname.indexOf("design-system")',
        location.pathname.indexOf("design-system")
      );
      return (
        <Flex>
          <Box width="400px">
            <AdvUIPatternsMenu path={ADV_UI_PATH} />
            <DesignSystemsMenu path={DESIGN_SYSTEMS_PATH} />
          </Box>
          <Flex flex="1">
            <div>
              <Switch>
                <Route path={ADV_UI_PATH} component={AdvancedUIPatterns} />
                <Route path={DESIGN_SYSTEMS_PATH} component={DesignSystem} />
              </Switch>
            </div>
          </Flex>
        </Flex>
      );
    }}
  />
);

export default App;
