import { P1, BOTH, EMPTY } from "./constants";
import TicTacToeBoard from "./TicTacToeBoard";
class TicTacToe {
  constructor() {
    this.whoseTurn = P1;
    this.board = new TicTacToeBoard();
  }
  getPlayer() {
    return this.whoseTurn;
  }
  makeMove(move) {
    // If we can successfully make a move, then check for a win.
    // If there is a win, then the current player won.
    // If there is no win, then check for a draw, else just change
    // which player's turn it is.
    if (this.board.makeMove(move, this.whoseTurn)) {
      if (this.board.checkWin(this.whoseTurn)) {
        return this.endGame(false);
      } else if (this.board.isDraw()) {
        return this.endGame(true);
      } else {
        this.whoseTurn = this.board.otherPlayer(this.whoseTurn);
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

export default TicTacToe;
