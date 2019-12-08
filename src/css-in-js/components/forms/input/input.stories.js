import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./";

storiesOf("Forms | Input", module)
  .add("Default Input", () => <Input />)
  .add("Error Import", () => <Input error={true} />)
  .add("Disabled Import", () => <Input disabled={true} />)
  .add("Disabled & Error Import", () => <Input disabled error />);
