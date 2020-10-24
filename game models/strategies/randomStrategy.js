const { EMPTY } = require("../constants");
class RandomStrategy {
  constructor(player) {
    this.player = player;
  }
  getMove(gameBoard) {
    let possibleMoves = [];
    let gameBoardLength = gameBoard.length;
    for (let cell = 0; cell < gameBoardLength; cell = cell + 1) {
      if (gameBoard[cell] === EMPTY) {
        possibleMoves.push(cell);
      }
    }
    let index = Math.floor(Math.random() * possibleMoves.length);
    return possibleMoves[index];
  }
  name() {
    return "Random Strategy";
  }
}

module.exports = RandomStrategy;
