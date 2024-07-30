import Square from "./square";
import winnerCheck from "../functions/haveWinner";

function SquareList({ squares, onNextStep, stepNum, winPosition }) {
  const handleClick = (i) => {
    if (squares[i] || winnerCheck(squares)) return;

    const newSquares = squares.slice();
    if (stepNum % 2 === 0) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    onNextStep(newSquares, i);
  };
  return (
    <>
      {[1, 2, 3].map((row, i) => {
        return (
          <div className="square-row" key={i}>
            {[1, 2, 3].map((square, f) => {
              const index = i * 3 + f;
              return (
                <Square
                  key={i + f}
                  value={squares[index]}
                  onClick={(ind) => handleClick(ind)}
                  ind={index}
                  isWinSquare={
                    winPosition
                      ? winPosition.findIndex((item) => item === index) !== -1
                        ? true
                        : false
                      : false
                  }
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
}
export default SquareList;
