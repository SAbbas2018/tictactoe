const { EMPTY, RANDOM_STRATEGY } = require("../constants");
class RandomStrategy {
  constructor(player) {
    this.player = player;
  }
  getMove(gameBoard) {
    let board = gameBoard.copy();
    let possibleMoves = [];
    let gameBoardLength = board.length;
    for (let cell = 0; cell < gameBoardLength; cell = cell + 1) {
      if (board[cell] === EMPTY) {
        possibleMoves.push(cell);
      }
    }
    let index = Math.floor(Math.random() * possibleMoves.length);
    return possibleMoves[index];
  }
  name() {
    return RANDOM_STRATEGY;
  }
}

module.exports = RandomStrategy;
