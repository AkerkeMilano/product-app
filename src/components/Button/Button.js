import React from "react";
import "./Button.css";

export const Button = ({type, children, onClick, disabled}) => {
  return (
    <button className="btn" type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};