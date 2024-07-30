function Square({ value, onClick, ind, isWinSquare }) {
  return (
    <button
      className={`square-item  ${
        value !== null
          ? value === "X"
            ? "green-square inactive"
            : "red-square inactive"
          : "active"
      } ${isWinSquare ? "win-square" : ""}`}
      onClick={() => onClick(ind)}
    >
      {value}
    </button>
  );
}
export default Square;
