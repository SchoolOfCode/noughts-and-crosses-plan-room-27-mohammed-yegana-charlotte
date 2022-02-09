import React from "react";
import "./style.css";
import Square from "../Square";

export default function Board({ onClick, value, board }) {
      return (
            <div className="board">
                  {board.map((item, i) => {
                        return (
                              <Square
                                    value={item}
                                    key={i}
                                    onClick={() => onClick(i)}
                                    className="square"
                              ></Square>
                        );
                  })}
            </div>
      );
}
