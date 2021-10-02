import React from "react";
import "./styles.css";

export default function Input({ type = "text", ...rest }) {
  return <input type={type} {...rest}></input>;
}
