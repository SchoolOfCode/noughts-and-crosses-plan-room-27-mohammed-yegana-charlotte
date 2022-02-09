import React from "react";
import "./style.css";
import Square from "../Square";
import {useState} from "react";

export default function Board({ onClick, value }) {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  

    return (
      <div className="board">
        {board.map(((item, i) => {
          return (
            <Square value={item} onClick={() => onClick(i)} className="square"></Square>
          )
        }))}
        
      </div>
    );
  }
