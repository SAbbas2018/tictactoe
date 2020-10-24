const { EMPTY } = require("../constants");
// This is the default AI strategy where the computer will pick the first possible empty spot for a move
class FirstPossibleStrategy {
  constructor(player) {
    this.player = player;
  }
  getMove(gameBoard) {
    let gameBoardLength = gameBoard.length;
    for (let cell = 0; cell < gameBoardLength; cell = cell + 1) {
      if (gameBoard[cell] === EMPTY) {
        return cell;
      }
    }
  }
  name() {
    return "First Possible Strategy";
  }
}

module.exports = FirstPossibleStrategy;
