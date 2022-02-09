import "./App.css";
import Board from "../Board/index";
import checkWinner from "../Winner";
import { useState } from "react";

function App() {
      const [xIsNext, setxIsNext] = useState(false);
      const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

      const winner = checkWinner(board);
      const player = xIsNext ? "X" : "O";

      function handleBoardClick(i) {
            if (winner || board[i]) {
                  return;
            }

            setBoard([...board.slice(0, i), player, ...board.slice(i + 1)]);
            console.log(player);
            setxIsNext(!xIsNext);
      }
      return (
            <div className="App">
                  <Board
                        onClick={handleBoardClick}
                        value={player}
                        board={board}
                  />
            </div>
      );
}

export default App;
