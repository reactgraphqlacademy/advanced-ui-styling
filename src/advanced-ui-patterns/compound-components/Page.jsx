import React from "react";
import { Helmet } from "react-helmet";

import RadioGroup from "./example/RadioGroup";
import Tabs, { TabPanel, Tab, TabList } from "./exercise/Tabs";

const Page = () => (
  <React.Fragment>
    <Helmet>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />
    </Helmet>
    <div>
      <h2>Compound Components</h2>
      <h3>Example</h3>
      <p>The following components are a compound component:</p>
      <p>
        <em>
          Folder:
          src/advanced-ui-patterns/compound-components/example/RadioGroup.jsx
          and RadioOption.jsx
        </em>
      </p>
      <div>
        <p>What is a compound component?</p>
        <RadioGroup
          defaultValue="fm"
          onChange={radioValue => {
            console.log("radioValue", radioValue);
          }}
        >
          <RadioGroup.Option value="1">
            A component that returns another component
          </RadioGroup.Option>
          <RadioGroup.Option value="2">
            A function that returns a component
          </RadioGroup.Option>
          <RadioGroup.Option value="3">
            A component that passes props dinamically to its children
          </RadioGroup.Option>
          <RadioGroup.Option value="4">
            I have no idea so I'll wait for my pair to answer
          </RadioGroup.Option>
          <RadioGroup.Option value="5">
            ... still waiting for my peers to answer, I think neither of us have
            any clue
          </RadioGroup.Option>
        </RadioGroup>
      </div>
      <h3>Exercise</h3>
      <p>
        Fix the following tabs so it changes the content when a tab is clicked.
        Steps:
      </p>
      <p>
        1- Open the file{" "}
        <code>
          {" "}
          src/advanced-ui-patterns/compound-components/exercise/Tabs.jsx
        </code>
      </p>
      <p>
        2- Iterate the children of the Tabs component using the function{" "}
        <a
          target="_blank"
          href="https://reactjs.org/docs/react-api.html#reactchildrenmap"
        >
          https://reactjs.org/docs/react-api.html#reactchildrenmap
        </a>
      </p>
      <p>
        3- Clone each child using the function{" "}
        <a href="https://reactjs.org/docs/react-api.html#cloneelement">
          https://reactjs.org/docs/react-api.html#cloneelement
        </a>{" "}
        and extend the children using the childExtendedProps defined in the same
        Tabs component
      </p>
      <p>
        4- The isActive in the TabList component should be true only if the the
        child's prop 'name' is equals to the activeTab prop
      </p>
      <Tabs defaultActiveTab="2">
        <TabList>
          <Tab name="1">one</Tab>
          <Tab name="2">two</Tab>
        </TabList>
        <TabPanel name="1">111</TabPanel>
        <TabPanel name="2">2222</TabPanel>
      </Tabs>
      <hr />
    </div>
  </React.Fragment>
);

export default Page;
