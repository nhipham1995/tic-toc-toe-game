function winnerCheck(arr) {
  const positionPosibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < positionPosibilities.length; i++) {
    const [a, b, c] = positionPosibilities[i];
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      return [arr[a], [a, b, c]];
    }
  }
  if (arr.findIndex((item) => item === null) === -1) return "draw";
  return null;
}

export default winnerCheck;
