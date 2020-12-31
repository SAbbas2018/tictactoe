import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import Axios from "axios";
import Display from "./Display";
import PlayerIdentifier from "./PlayerIdentifier";
const EMPTY = "";
const P1 = "X";
function TicTacToe(props) {
  // const history = useHistory();
  // X wins, O Wins, or both ie draw
  const [winner, setWinner] = useState(null);
  // Class used to determine the endgame screen should show or not
  const [endGame, setEndGame] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState(P1);
  let [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const startGame = async () => {
    try {
      const response = await Axios.get("/tictactoe/getGame");
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
    let makeMoveResponse = await Axios.post("/tictactoe/makeMove", {
      board,
      index,
      currentPlayer,
    });
    const { playerWinner, boardToReturn, nextPlayer } = makeMoveResponse.data;
    setBoard(boardToReturn);
    if (playerWinner === EMPTY) {
      setCurrentPlayer(nextPlayer);
      return;
    }
    setWinner(playerWinner);
    setEndGame("show");
  };

  // const handleBackToHome = (e) => {
  //   e.preventDefault();
  //   history.push("/");
  // };

  const data = {
    currentPlayer,
    board,
    winner,
    endGame,
    handleClick,
    startGame,
  };
  return (
    <div className="tic-tac-toe">
      <PlayerIdentifier currentPlayer={currentPlayer} />
      <Display data={data} />
    </div>
  );
}

export default TicTacToe;
