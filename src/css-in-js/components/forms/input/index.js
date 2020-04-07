import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 5px;
  border: ${(props) => props.error && "1px solid red"};
  ${(props) =>
    props.disabled &&
    `
  background-color: grey;
  border: 1px solid grey;
  `}
`;

export default Input;
