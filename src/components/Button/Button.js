import React from "react";
import "./Button.css";

export const Button = ({type, children, onClick}) => {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {children}
    </button>
  );
};