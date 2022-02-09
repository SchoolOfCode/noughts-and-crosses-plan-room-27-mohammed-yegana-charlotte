import "./App.css";
import Board from "../Board/index";
import { useState } from "react";

function App() {
  let x = "x";
  let o = "o";
  const [player, setPlayer] = useState("");

  function handleBoardClick() {
    if (x) {
      setPlayer(o);
      console.log(player);
    } else if ("" || o) {
      setPlayer(x);
    }
  }
  return (
    <div className="App">
      <Board onClick={handleBoardClick} value={player} />
    </div>
  );
}

export default App;
