const { move } = require("../../routes/aiTicTacToeRouter");
const { EMPTY, MOVE_SET, FIRST_POSSIBLE } = require("../constants");
// This is the default AI strategy where the computer will pick the first possible empty spot for a move
class FirstPossibleStrategy {
  constructor(player) {
    this.player = player;
  }
  getMove(gameBoard) {
    let board = gameBoard.copy();
    for (let move_list = 0; move_list < MOVE_SET.length; move_list++) {
      for (let index = 0; index < MOVE_SET[move_list].length; index++) {
        if (board[MOVE_SET[move_list][index]] === EMPTY) {
          return MOVE_SET[move_list][index];
        }
      }
    }
  }
  name() {
    return FIRST_POSSIBLE;
  }
}

module.exports = FirstPossibleStrategy;
