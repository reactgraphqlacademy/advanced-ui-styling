import React, { useState } from "react";
import styled from "styled-components";
import Box from "./Box";

/*
For accesibility attributes visit
https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html
*/

const StyledTabList = styled(Box)`
  list-style: none;
`;
StyledTabList.defaultProps = {
  as: "ul",
  mt: 0,
  mb: 0,
  ml: 0,
  mr: 0,
  p: 0
};

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
      variant: activeTab === nameCurrentTab ? "active" : "default",
      onClick: () => setActiveTab(nameCurrentTab)
    };
    return React.cloneElement(child, childExtendedProps);
  });

  return (
    <StyledTabList role="tablist" {...rest}>
      {newChildren}
    </StyledTabList>
  );
};
TabList.displayName = "TabList";

const StyledTab = styled(Box)`
  ${({ cursor }) => `cursor: ${cursor};`}
`;

const tabListVariantProps = {
  active: {
    backgroundColor: "white",
    borderBottomColor: "black"
  },
  default: {
    backgroundColor: "grey",
    borderBottomColor: "pink",
    color: "white",
    cursor: "pointer"
  }
};

StyledTab.defaultProps = {
  as: "li",
  m: 0,
  py: 2,
  px: 4,
  display: "inline-block",
  variant: "default",
  borderBottomWidth: "3px",
  borderBottomStyle: "solid"
};
export const Tab = ({ name, onClick, children, variant, ...rest }) => (
  <StyledTab
    role="tab"
    onClick={onClick}
    {...variant && tabListVariantProps[variant]}
    {...rest}
  >
    {children}
  </StyledTab>
);
Tab.displayName = "Tab";

export const TabPanel = ({ name, activeTab, children }) =>
  activeTab === name ? children : null;
TabPanel.displayName = "TabPanel";

const Tabs = ({ defaultActiveTab, children = null, ...rest }) => {
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
