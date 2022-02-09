import "./App.css";
import Board from "../Board/index";
import { useState } from "react";

function App() {
  const [player, setPlayer] = useState("");
  const [xIsNext, setxIsNext] = useState(false);
  let xo = xIsNext ? "X" : "O";

  function handleBoardClick() {
    console.log(xo);
    setxIsNext(!xIsNext);
  }
  return (
    <div className="App">
      <Board onClick={handleBoardClick} value={xo} />
    </div>
  );
}

export default App;
