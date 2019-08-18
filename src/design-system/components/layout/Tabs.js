import React, { useState } from "react";
import styled from "styled-components";

/*
For accesibility attributes visit
https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html
*/

const StyledTabList = styled.ul``;

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
      isActive: activeTab === nameCurrentTab,
      onClick: () => setActiveTab(nameCurrentTab)
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

const Tabs = ({ defaultActiveTab, children = null }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const childExtendedProps = {
    activeTab,
    setActiveTab
  };

  return React.Children.map(children, child =>
    React.cloneElement(child, childExtendedProps)
  );
};
Tabs.displayName = "Tabs";

export default Tabs;
