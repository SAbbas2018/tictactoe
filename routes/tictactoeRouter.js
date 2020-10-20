const router = require("express").Router();
const Axios = require("axios");
const TicTacToe = require("../game models/TicTacToe");
const { EMPTY } = require("../game models/constants");
/*
    ReqType: GET URL: /tictactoe/getGame
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
    ReqType: POST URL: /tictactoe/makeMove
    Access: Public
    Desc: make a move for the current player 
*/
router.post("/makeMove", async (req, res) => {
  try {
    const { board, index, currentPlayer } = req.body;
    const tictactoe = new TicTacToe();
    tictactoe.setGameBoard(board);
    tictactoe.setPlayer(currentPlayer);
    const player = tictactoe.makeMove(index);
    let playerWinner = player === EMPTY ? EMPTY : player;
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
