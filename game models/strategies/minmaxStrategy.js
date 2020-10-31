const { P1, P2, EMPTY, SCORES, MINMAX_STRATEGY } = require("../constants");
// This is the default AI strategy where the computer will pick the first possible empty spot for a move
// The mini max algorithm here is from the Coding Train
// Their YouTube Video: https://www.youtube.com/watch?v=trKjYdBASyQ
// Their code repo for the mini max algo: https://github.com/CodingTrain/website/blob/main/CodingChallenges/CC_154_Tic_Tac_Toe_Minimax/P5/minimax.js
class MinMaxStrategy {
  constructor(player) {
    this.player = player;
    this.otherPlayer = this.player === P1 ? P2 : P1;
  }
  getMove(gameBoard) {
    let bestScore = -Infinity;
    let board = gameBoard.copy();
    let move;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === EMPTY) {
        board[i] = this.player;
        gameBoard.setBoard(board);
        let score = this.minmax(gameBoard, 0, false);
        board[i] = EMPTY;
        gameBoard.setBoard(board);
        if (score > bestScore) {
          bestScore = score;
          move = i;
          //   console.log(score, move);
        }
      }
    }
    return move;
  }
  minmax(gameBoard, depth, isMaxing) {
    let result = gameBoard.checkWinner();
    if (result !== EMPTY) {
      let score = SCORES[result];
      return score;
    }
    let board = gameBoard.copy();
    if (isMaxing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === EMPTY) {
          board[i] = this.player;
          gameBoard.setBoard(board);
          let score = this.minmax(gameBoard, depth + 1, false);
          board[i] = EMPTY;
          gameBoard.setBoard(board);
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === EMPTY) {
          board[i] = this.otherPlayer;
          gameBoard.setBoard(board);
          let score = this.minmax(gameBoard, depth + 1, true);
          board[i] = EMPTY;
          gameBoard.setBoard(board);
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  }
  name() {
    return MINMAX_STRATEGY;
  }
}

module.exports = MinMaxStrategy;
