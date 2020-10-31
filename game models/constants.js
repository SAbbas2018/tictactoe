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
const MOVE_SET = [[4], [0, 2, 1, 3, 8], [6, 5, 7]];
const FIRST_POSSIBLE = "First Possible Strategy";
const RANDOM_STRATEGY = "Random Strategy";
const MINMAX_STRATEGY = "MinMax Strategy";
let SCORES = {
  X: -1,
  O: 1,
  "Draw!": 0,
};
module.exports = {
  P1,
  P2,
  EMPTY,
  BOTH,
  WINNING_COMBINATIONS,
  MOVE_SET,
  FIRST_POSSIBLE,
  RANDOM_STRATEGY,
  MINMAX_STRATEGY,
  SCORES,
};
