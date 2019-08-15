import React from "react";
import { Helmet } from "react-helmet";

import RadioGroup from "./example/RadioGroup";
//import RadioOption from "./example/RadioOption";

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
        Refactor the Tabs component in
        src/advanced-ui-patterns/compound-components/exercise/ so we don't have
        to pass explicitly the state.
      </p>
      <hr />
    </div>
  </React.Fragment>
);

export default Page;
