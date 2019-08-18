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

const ADV_UI_PATH = "/advanced-ui-patterns";
const DESIGN_SYSTEMS_PATH = "/design-system";

const App = () => (
  <div style={{ display: "flex" }}>
    <div style={{ width: "280px" }}>
      <Tabs defaultActiveTab="adv-ui">
        <TabList>
          <Tab name="ds">Design System</Tab>
          <Tab name="adv-ui">Adv. UI Patterns</Tab>
        </TabList>
        <TabPanel name="ds">
          <DesignSystemsMenu path={DESIGN_SYSTEMS_PATH} />
        </TabPanel>
        <TabPanel name="adv-ui">
          <AdvUIPatternsMenu path={ADV_UI_PATH} />
        </TabPanel>
      </Tabs>
    </div>
    <div style={{ flex: 1 }}>
      <Switch>
        <Route path={ADV_UI_PATH} component={AdvancedUIPatterns} />
        <Route path={DESIGN_SYSTEMS_PATH} component={DesignSystem} />
      </Switch>
    </div>
  </div>
);

export default App;
