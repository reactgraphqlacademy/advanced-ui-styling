import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./";

storiesOf("Forms | Buttons", module)
  .add("Default button", () => <Button>Click me</Button>)
  .add("Button Primary", () => <Button primary>Click me</Button>)
  .add("Button Large", () => <Button large>Click me</Button>)
  .add("Button Block", () => <Button block>Click me</Button>);
