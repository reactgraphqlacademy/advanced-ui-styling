import React from "react";
import styled from "styled-components";

const Alert = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  ${props =>
    props.primary &&
    `
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
  `}

  ${props =>
    props.secondary &&
    `
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #d6d8db;
  `}

  ${props =>
    props.warning &&
    `
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  `}

  ${props =>
    props.info &&
    `
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
  `}

  ${props =>
    props.danger &&
    `
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  `}

  ${props =>
    props.success &&
    `
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  `}

  ${props =>
    props.light &&
    `
    color: #818182;
    background-color: #fefefe;
    border-color: #fdfdfe;
  `}

  ${props =>
    props.dark &&
    `
    color: #1b1e21;
    background-color: #d6d8d9;
    border-color: #c6c8ca;
  `}

`;

export default Alert;
