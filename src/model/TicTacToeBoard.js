import { P1, P2, EMPTY, WINNING_COMBINATIONS } from "./constants";
class TicTacToeBoard {
  constructor() {
    this.board = [
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
    ];
  }
  copy() {
    let newBoard = new Array(9);
    for (let i = 0; i < this.board.length; i++) {
      newBoard[i] = this.board[i];
    }
    return newBoard;
  }
  otherPlayer(player) {
    if (player == P1) return P2;
    if (player == P2) return P1;
    return EMPTY;
  }
  checkWin(player) {
    // Check if the game board contains the player in any of the winning combinations
    return WINNING_COMBINATIONS.some((combination) => {
      return combination.every((index) => {
        return this.copy()[index].contains(player);
      });
    });
  }
  isDraw() {
    return this.copy().every((element) => {
      return element === P1 || element === P2;
    });
  }
  checkValid(move) {
    return this.board[move] === EMPTY;
  }
  makeMove(move, player) {
    if (!this.checkValid(move)) {
      return false;
    }
    this.board[move] = player;
    return true;
  }
}

export default TicTacToeBoard;
