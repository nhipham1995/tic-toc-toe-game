import { useState } from "react";
import SquareList from "./squareList";
import winnerCheck from "../functions/haveWinner";
import moveDescription from "../functions/moveDescription";
function Game() {
  // store all the move from the beginning
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNum, setStepNum] = useState(0);
  const [moveDes, setMoveDes] = useState([]);
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);

  const currentSquares = history[history.length - 1];

  const handleNextStep = (newSquares, squareInd) => {
    setHistory([...history, newSquares]);
    setStepNum(stepNum + 1);
    const newMove = moveDescription(squareInd);
    setMoveDes([...moveDes, newMove]);
  };

  const rePlayAt = (i) => {
    const newHistory = history.slice(0, i);
    setHistory(newHistory);
    setMoveDes(moveDes.slice(0, i - 1));
    setStepNum(i + 1);
  };

  const restartFunc = () => {
    setHistory([Array(9).fill(null)]);
    setStepNum(0);
    setMoveDes([]);
  };

  const winner = winnerCheck(currentSquares);

  const instructionDes =
    winner === null
      ? `Next player: ${stepNum % 2 === 0 ? "X" : "O"}`
      : winner === "draw"
      ? "This game ends in a draw."
      : `Winner is ${winner[0]}`;

  return (
    <>
      {winner && (
        <button className="restart-button" onClick={restartFunc}>
          Start new game
        </button>
      )}
      <h2>{instructionDes}</h2>
      <SquareList
        onNextStep={handleNextStep}
        squares={currentSquares}
        stepNum={stepNum}
        squareInd={history.length}
        winPosition={winner && winner[1] !== "r" ? winner[1] : undefined}
      />
      <div>
        <h3 className="move-info-title">Track all the moves</h3>
        <p className="instruction-info">
          (Click to the move description item below so that you can come back at
          that point and replay)
        </p>
        <ul className="move-list">
          <button
            className="result-order-toggle"
            onClick={() => setIsAscendingOrder(!isAscendingOrder)}
          >
            {isAscendingOrder ? "Ascending Order" : "Descending Order"}
          </button>
          {moveDes.map((description, i) => {
            if (history.length === 0) return null;

            return (
              <li key={i} onClick={() => rePlayAt(i + 2)}>
                <button>
                  {i + 1}.{" "}
                  {isAscendingOrder
                    ? description
                    : moveDes[moveDes.length - 1 - i]}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Game;