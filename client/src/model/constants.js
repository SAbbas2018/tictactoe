const P1 = "X";
const P2 = "O";
const EMPTY = "";
const BOTH = "Draw!";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
module.exports = {
  P1,
  P2,
  EMPTY,
  BOTH,
  WINNING_COMBINATIONS,
};
