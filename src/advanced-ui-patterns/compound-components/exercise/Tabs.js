import React, { useState } from "react";

/*
For accesibility attributes visit
https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html
*/

const Tabs = ({ defaultActiveTab, children = null }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const childExtendedProps = {
    activeTab,
    setActiveTab
  };

  // TODO:
  // 1) Iterate the children using the function https://reactjs.org/docs/react-api.html#reactchildrenmap
  // 2) Clone each child using the function https://reactjs.org/docs/react-api.html#cloneelement
  //     and extend the children using the childExtendedProps defined above
  // 3) Return the new children
  return children;
};
Tabs.displayName = "Tabs";

export const TabList = ({
  activeTab,
  setActiveTab,
  onChange,
  children,
  ...rest
}) => {
  const newChildren = React.Children.map(children, child => {
    const { name: nameCurrentTab } = child.props;
    const childExtendedProps = {
      isActive: false, // TODO isActive should be true if the the child's prop 'name' is equals to the activeTab prop
      onClick: () => setActiveTab && setActiveTab(nameCurrentTab)
    };

    return React.cloneElement(child, childExtendedProps);
  });

  return (
    <ul role="tablist" {...rest}>
      {newChildren}
    </ul>
  );
};
TabList.displayName = "TabList";

export const Tab = ({ name, onClick, children, ...rest }) => (
  <li role="tab" onClick={onClick} {...rest}>
    {children}
  </li>
);
Tab.displayName = "Tab";

export const TabPanel = ({ name, activeTab, children }) =>
  activeTab === name ? children : null;
TabPanel.displayName = "TabPanel";

export default Tabs;
