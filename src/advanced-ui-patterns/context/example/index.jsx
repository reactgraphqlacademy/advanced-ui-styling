import React from "react";
import { Button } from "react-bootstrap";
import { useModal } from "./Modal";

const Example = () => {
  const { showModal } = useModal();

  return (
    <Button
      onClick={() => {
        showModal(<h1>Hi there!</h1>);
      }}
      bsStyle="info"
    >
      Show modal
    </Button>
  );
};

export default Example;
