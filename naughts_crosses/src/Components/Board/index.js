import React from "react";
import "./style.css";

export default function Board({ onClick, value }) {
  return (
    <div onClick={onClick} className="board">
      <div value={value} className="square"></div>
      <div value={value} className="square"></div>
      <div value={value} className="square"></div>
      <div value={value} className="square"></div>
      <div value={value} className="square"></div>
      <div value={value} className="square"></div>
      <div value={value} className="square"></div>
      <div value={value} className="square"></div>
      <div value={value} className="square"></div>
    </div>
  );
}
