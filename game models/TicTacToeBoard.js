const { P1, P2, BOTH, EMPTY, WINNING_COMBINATIONS } = require("./constants.js");
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
  setBoard(newBoard) {
    this.board = newBoard;
  }
  otherPlayer(player) {
    if (player === P1) return P2;
    if (player === P2) return P1;
    return EMPTY;
  }
  checkWin(player) {
    // Check if the game board contains the player in any of the winning combinations
    return WINNING_COMBINATIONS.some((combination) => {
      return combination.every((index) => {
        return this.copy()[index] === player;
      });
    });
  }
  isDraw() {
    return this.copy().every((element) => {
      return element === P1 || element === P2;
    });
  }
  checkValid(move) {
    return this.copy()[move] === EMPTY;
  }
  makeMove(move, player) {
    if (this.checkValid(move) === false) {
      return false;
    }
    let newBoard = this.copy();
    newBoard[move] = player;
    this.setBoard(newBoard);
    return true;
  }
  checkWinner() {
    // This is specially made for the min max strategy
    // Check if the game board contains the player in any of the winning combinations
    let board = this.copy();
    let p1Winner = WINNING_COMBINATIONS.some((combination) => {
      return combination.every((index) => {
        return board[index] === P1;
      });
    });
    let p2Winner = WINNING_COMBINATIONS.some((combination) => {
      return combination.every((index) => {
        return board[index] === P2;
      });
    });
    if (p1Winner === true) {
      return P1;
    } else if (p2Winner === true) {
      return P2;
    } else if (this.isDraw()) {
      return BOTH;
    } else {
      return EMPTY;
    }
  }
}

module.exports = TicTacToeBoard;
