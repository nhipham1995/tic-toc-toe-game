function moveDescription(square) {
  const description = [
    "Played on left square of the first row (0,0)",
    "Played on the middle square of the first row (0, 1)",
    "Played on the right square of the first row (0,2)",
    "Played on left square of the second row (1, 0)",
    "Played on the middle square of the second row (1,1)",
    "Played on the right square of the second row (1,2)",
    "Played on left square of the third row (2,0)",
    "Played on the middle square of the third row (2,1)",
    "Played on the right square of the third row (2,2)",
  ];
  return description[square];
}

export default moveDescription;
