const { P1, BOTH, EMPTY } = require("./constants");
const TicTacToeBoard = require("./TicTacToeBoard");
class TicTacToe {
  constructor() {
    this.whoseTurn = P1;
    this.tictactoeBoard = new TicTacToeBoard();
  }
  setGameBoard(board) {
    this.tictactoeBoard.setBoard(board);
  }
  getGameBoard() {
    return this.tictactoeBoard.copy();
  }
  getTicTacToeBoard() {
    return this.tictactoeBoard;
  }
  setPlayer(player) {
    this.whoseTurn = player;
  }
  getPlayer() {
    return this.whoseTurn;
  }
  makeMove(move) {
    // If we can successfully make a move, then check for a win.
    // If there is a win, then the current player won.
    // If there is no win, then check for a draw, else just change
    // which player's turn it is.
    if (this.tictactoeBoard.makeMove(move, this.whoseTurn)) {
      if (this.tictactoeBoard.checkWin(this.whoseTurn)) {
        return this.endGame(false);
      } else if (this.tictactoeBoard.isDraw()) {
        return this.endGame(true);
      } else {
        this.whoseTurn = this.tictactoeBoard.otherPlayer(this.whoseTurn);
      }
    }
    return EMPTY;
  }
  endGame(draw) {
    if (draw) {
      return BOTH;
    } else {
      return `${this.whoseTurn} wins!`;
    }
  }
}

module.exports = TicTacToe;
