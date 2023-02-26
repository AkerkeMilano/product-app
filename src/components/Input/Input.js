import React from "react";
import "./Input.css";

export const Input = ({
  label,
  name,
  type,
  handleChange,
  inputValue,
  placeholder,
  pattern,
  maxlength,
}) => {
  return (
    <div className="InputLine">
      <label>{label}</label>
      <input
        className="inputStyle"
        name={name}
        type={type ? type : "text"}
        onChange={handleChange}
        value={inputValue}
        placeholder={placeholder}
        pattern={pattern}
        maxLength={maxlength}
      />
    </div>
  );
};