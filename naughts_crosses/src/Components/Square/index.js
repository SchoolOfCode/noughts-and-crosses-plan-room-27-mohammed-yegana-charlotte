import React from "react";
import "./style.css";

export default function Square({ value, onClick }) {
  const style = value ? `squares ${value}` : "squares";
  return <div className={style} onClick={onClick}></div>;
}
