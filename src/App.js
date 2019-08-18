import React from "react";
import { Switch, Route } from "react-router-dom";

import Tabs, {
  TabPanel,
  Tab,
  TabList
} from "./design-system/components/layout/Tabs";
import DesignSystem, { Menu as DesignSystemsMenu } from "./design-system";
import AdvancedUIPatterns, {
  Menu as AdvUIPatternsMenu
} from "./advanced-ui-patterns";
import Box from "./design-system/components/layout/Box";
import Flex from "./design-system/components/layout/Flex";

const ADV_UI_PATH = "/advanced-ui-patterns";
const DESIGN_SYSTEMS_PATH = "/design-system";

const App = () => (
  <Route
    render={({ location }) => (
      <Flex>
        <Box width="350px">
          <Tabs
            defaultActiveTab={
              location.pathname.indexOf("design-system") < 0 ? "adv-ui" : "ds"
            }
          >
            <TabList>
              <Tab name="adv-ui">Adv. UI Patterns</Tab>
              <Tab name="ds">Design System</Tab>
            </TabList>
            <TabPanel name="ds">
              <DesignSystemsMenu path={DESIGN_SYSTEMS_PATH} />
            </TabPanel>
            <TabPanel name="adv-ui">
              <AdvUIPatternsMenu path={ADV_UI_PATH} />
            </TabPanel>
          </Tabs>
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
    )}
  />
);

export default App;
