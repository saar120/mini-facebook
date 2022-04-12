import React from "react";
import propTypes from "prop-types";

function Input({ placeholder, name, handleChange, type, autoFocus, value }) {
  return (
    <input
      name={name}
      onChange={handleChange}
      required
      value={value}
      autoComplete="false"
      placeholder={placeholder}
      autoFocus={autoFocus}
      type={type}
    />
  );
}

Input.propTypes = {
  placeholder: propTypes.string,
  name: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
  type: propTypes.string.isRequired,
  autoFocus: propTypes.bool,
  value: propTypes.string.isRequired,
};

export default Input;
