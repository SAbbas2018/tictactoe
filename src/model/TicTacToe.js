import { P1, EMPTY } from "./constants";
import TicTacToeBoard from "./TicTacToeBoard";
class TicTacToe {
  constructor() {
    this.whoseTurn = P1;
    this.board = new TicTacToeBoard();
  }
  makeMove(move) {
    // If we can successfully make a move, then check for a win.
    // If there is a win, then the current player won.
    // If there is no win, then check for a draw, else just change
    // which player's turn it is.
    if (this.board.makeMove(move, this.whoseTurn)) {
      if (this.board.checkWin(this.whoseTurn)) {
        endGame(false);
      } else if (this.board.isDraw()) {
        endGame(true);
      } else {
        this.whoseTurn = this.board.otherPlayer(this.whoseTurn);
      }
    }
    return false;
  }
  endGame(draw) {
    if (draw) {
      return "Draw!";
    } else {
      return this.whoseTurn;
    }
  }
}

export default TicTacToe;
