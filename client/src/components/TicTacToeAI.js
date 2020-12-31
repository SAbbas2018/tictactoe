import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  EMPTY,
  P1,
  FIRST_POSSIBLE,
  RANDOM_STRATEGY,
  MINMAX_STRATEGY,
} from "../constants/constants";
import Display from "./Display";
function TicTacToeAI(props) {
  // X wins, O Wins, or both ie draw
  const [winner, setWinner] = useState(null);
  // Class used to determine the endgame screen should show or not
  const [endGame, setEndGame] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState(P1);
  const [difficulty, setDifficulty] = useState(FIRST_POSSIBLE);
  let [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const startGame = async () => {
    try {
      const response = await Axios.get("/ai/getGame");
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
    let makeMoveResponse = await Axios.post("/ai/makeMove", {
      board,
      index,
      currentPlayer,
      difficulty,
    });
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

  const handleDifficulty = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    setDifficulty(e.target.id);
  };
  return (
    <div className="tic-tac-toe">
      <Display
        data={{ currentPlayer, board, winner, endGame, handleClick, startGame }}
      />
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
          id={MINMAX_STRATEGY}
          type="button"
          className="btn btn-danger btn-block difficulty-item"
          onClick={handleDifficulty}
        >
          Impossible
        </button>
      </section>
    </div>
  );
}

export default TicTacToeAI;
