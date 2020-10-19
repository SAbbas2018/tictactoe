import React, { useState } from "react";

import "./App.css";
import TicTacToe from "./model/TicTacToe";
const { EMPTY } = require("./model/constants.js");

function App() {
  const [game, setGame] = useState(new TicTacToe());
  // X wins, O Wins, or both ie draw
  const [winner, setWinner] = useState(null);
  // Class used to determine the endgame screen should show or not
  const [endGame, setEndGame] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState(game.getPlayer());
  let [board, setBoard] = useState(game.board.copy());

  const startGame = () => {
    setWinner(null);
    setEndGame("");
    setBoard(new TicTacToe().board);
    setGame(new TicTacToe());
    // console.log("start game");
  };

  const handleClick = (e) => {
    e.preventDefault();
    // console.log("handle click");
    const index = e.target.id;
    let playerWinner = game.makeMove(index, currentPlayer);
    setBoard(game.board.copy());
    if (playerWinner === EMPTY) {
      setCurrentPlayer(game.getPlayer());
      return;
    }
    setWinner(playerWinner);
    setEndGame("show");
  };

  return (
    <div className="App">
      <header className="App-header">Tic Tac Toe</header>
      <div className={`board ${currentPlayer}`} id="board">
        <div
          className={`cell ${board[0]}`}
          id="0"
          data-cell
          onClick={handleClick}
        ></div>
        <div
          className={`cell ${board[1]}`}
          id="1"
          data-cell
          onClick={handleClick}
        ></div>
        <div
          className={`cell ${board[2]}`}
          id="2"
          data-cell
          onClick={handleClick}
        ></div>
        <div
          className={`cell ${board[3]}`}
          id="3"
          data-cell
          onClick={handleClick}
        ></div>
        <div
          className={`cell ${board[4]}`}
          id="4"
          data-cell
          onClick={handleClick}
        ></div>
        <div
          className={`cell ${board[5]}`}
          id="5"
          data-cell
          onClick={handleClick}
        ></div>
        <div
          className={`cell ${board[6]}`}
          id="6"
          data-cell
          onClick={handleClick}
        ></div>
        <div
          className={`cell ${board[7]}`}
          id="7"
          data-cell
          onClick={handleClick}
        ></div>
        <div
          className={`cell ${board[8]}`}
          id="8"
          data-cell
          onClick={handleClick}
        ></div>
      </div>
      <div className={`winning-message ${endGame}`} id="winningMessage">
        <div data-winning-message-text>{winner}</div>
        <button id="restartButton" onClick={startGame}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default App;
