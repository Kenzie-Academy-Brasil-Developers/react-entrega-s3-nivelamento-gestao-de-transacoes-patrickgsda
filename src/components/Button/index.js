import React from "react";
import "./styles.css";

export default function Button({ type = "submit", children, ...rest }) {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
}
