import React from "react";
import { storiesOf } from "@storybook/react";
import Alert from "./";

storiesOf("Alerts", module)
  .add("Default alert", () => <Alert>Default Alert</Alert>)
  .add("Primary alert", () => <Alert primary>Primary Alert</Alert>)
  .add("Secondary alert", () => <Alert secondary>Secondary Alert</Alert>)
  .add("Info alert", () => <Alert info>Info Alert</Alert>)
  .add("Warning alert", () => <Alert warning>Warning Alert</Alert>)
  .add("Danger alert", () => <Alert danger>Danger Alert</Alert>)
  .add("Success alert", () => <Alert success>Success Alert</Alert>)
  .add("Light alert", () => <Alert light>Light Alert</Alert>)
  .add("Dark alert", () => <Alert dark>Dark Alert</Alert>);
