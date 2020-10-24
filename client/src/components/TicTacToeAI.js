import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import {
  EMPTY,
  P1,
  FIRST_POSSIBLE,
  RANDOM_STRATEGY,
} from "../constants/constants";
function TicTacToeAI(props) {
  const history = useHistory();
  // X wins, O Wins, or both ie draw
  const [winner, setWinner] = useState(null);
  // Class used to determine the endgame screen should show or not
  const [endGame, setEndGame] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState(P1);
  const [difficulty, setDifficulty] = useState(FIRST_POSSIBLE);
  let [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const startGame = async () => {
    try {
      const response = await Axios.get("http://localhost:5000/ai/getGame");
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
    const index = e.target.id;
    let makeMoveResponse = await Axios.post(
      "http://localhost:5000/ai/makeMove",
      {
        board,
        index,
        currentPlayer,
        difficulty,
      }
    );
    // console.log(makeMoveResponse.data);
    const { playerWinner, boardToReturn, nextPlayer } = makeMoveResponse.data;
    setBoard(boardToReturn);
    if (playerWinner === EMPTY) {
      setCurrentPlayer(nextPlayer);
      return;
    }
    setWinner(playerWinner);
    setEndGame("show");
  };

  const handleBackToHome = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const handleDifficulty = (e) => {
    e.preventDefault();
    setDifficulty(e.target.id);
  };
  return (
    <div className="tic-tac-toe">
      <div className="back-to-home">
        <button
          type="button"
          className="btn btn-primary btn-lg home-button"
          onClick={handleBackToHome}
        >
          Home
        </button>
      </div>
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
      <section className="difficulty-buttons">
        <button
          id={FIRST_POSSIBLE}
          type="button"
          className="btn btn-success btn-block difficulty-item"
          onClick={handleDifficulty}
        >
          Easy
        </button>
        <button
          id={RANDOM_STRATEGY}
          type="button"
          className="btn btn-warning btn-block difficulty-item"
          onClick={handleDifficulty}
        >
          Random
        </button>
        <button
          type="button"
          className="btn btn-danger btn-block difficulty-item"
          onClick={handleDifficulty}
        >
          Impossible
        </button>
      </section>
      <div className={`winning-message ${endGame}`} id="winningMessage">
        <div data-winning-message-text>{winner}</div>
        <button id="restartButton" onClick={startGame}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default TicTacToeAI;
