import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
const EMPTY = "";
const P1 = "X";
function App() {
  // X wins, O Wins, or both ie draw
  const [winner, setWinner] = useState(null);
  // Class used to determine the endgame screen should show or not
  const [endGame, setEndGame] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState(P1);
  let [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  const startGame = async () => {
    try {
      const response = await Axios.get(
        "http://localhost:5000/tictactoe/getGame"
      );
      const { gameBoard } = response.data;
      setWinner(null);
      setEndGame("");
      setBoard(gameBoard);
      setCurrentPlayer(P1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    startGame();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("handle click");
    const index = e.target.id;
    let makeMoveResponse = await Axios.post(
      "http://localhost:5000/tictactoe/makeMove",
      {
        board,
        index,
        currentPlayer,
      }
    );
    console.log(makeMoveResponse.data);
    const { playerWinner, boardToReturn, nextPlayer } = makeMoveResponse.data;
    setBoard(boardToReturn);
    if (playerWinner === EMPTY) {
      setCurrentPlayer(nextPlayer);
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
