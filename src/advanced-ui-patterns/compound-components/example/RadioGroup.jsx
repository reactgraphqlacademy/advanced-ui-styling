import React, { useState } from "react";
import PropTypes from "prop-types";

const RadioGroup = ({ defaultValue, children, onChange }) => {
  const [value, setValue] = useState(defaultValue);

  function select(value) {
    setValue(value);
    onChange && onChange(value);
  }

  const newChildren = React.Children.map(children, child =>
    React.cloneElement(child, {
      isSelected: child.props.value === value,
      onClick: () => select(child.props.value)
    })
  );

  return <>{newChildren}</>;
};

const RadioOption = ({ onClick, isSelected, children }) => (
  <div onClick={onClick}>
    <span
      className={isSelected ? "fa fa-circle" : "fa fa-circle-o"}
      style={{ paddingRight: "10px", cursor: "pointer" }}
    />
    {children}
  </div>
);

RadioGroup.Option = RadioOption;

RadioGroup.propTypes = {
  defaultValue: PropTypes.string
};

export default RadioGroup;
