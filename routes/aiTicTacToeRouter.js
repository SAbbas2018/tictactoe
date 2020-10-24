const router = require("express").Router();
const Axios = require("axios");
const TicTacToe = require("../game models/TicTacToe");
const { P2, EMPTY } = require("../game models/constants");
const { PlayerTwo } = require("../game models/PlayerTwo");
/*
    ReqType: GET URL: /ai/getGame
    Access: Public
    Desc: Create a new TicTacToe game and send it to the client
*/
router.get("/getGame", async (req, res) => {
  try {
    const gameBoard = new TicTacToe().getGameBoard();
    res.status(200).json({ message: "success", gameBoard });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
    ReqType: POST URL: /ai/makeMove
    Access: Public
    Desc: make a move for the current player 
*/
router.post("/makeMove", async (req, res) => {
  try {
    const { board, index, currentPlayer } = req.body;
    const tictactoe = new TicTacToe();
    tictactoe.setGameBoard(board);
    tictactoe.setPlayer(currentPlayer);
    let winner = tictactoe.makeMove(index);
    if (winner === EMPTY) {
      // Game is not over, so make a move for the ai
      let ai = new PlayerTwo(P2);
      const move = ai.getMove(tictactoe.getGameBoard());
      winner = tictactoe.makeMove(move);
    }
    let playerWinner = winner === EMPTY ? EMPTY : winner;
    let boardToReturn = tictactoe.getGameBoard();
    let nextPlayer = tictactoe.getPlayer();
    res
      .status(200)
      .json({ message: "success", playerWinner, boardToReturn, nextPlayer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
