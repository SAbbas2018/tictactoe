import React, { useState, useEffect, useContext } from "react";
import { SocketContext } from "../context/socket";
import DisplaySocket from "./DisplaySocket";
import { useHistory } from "react-router-dom";
import PlayerIdentifier from "./PlayerIdentifier";
import PlayerTwoUP from "./PlayerTwoUP";
export default function TicTacToeHost() {
  const socket = useContext(SocketContext);
  const p = 1;
  const history = useHistory();
  const [thisPlayer, setPlayer] = useState();
  const [gameCode, setGameCode] = useState("");
  const [gameState, setGameState] = useState();
  const [playerTurn, setPlayerTurn] = useState("");
  const [show, setShow] = useState("");
  // Socket functions
  const startGame = (e) => {
    e.preventDefault();
    socket.emit("restartGame", gameCode);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const index = e.target.id;
    socket.emit("makeMove", index, thisPlayer);
  };
  const handlePlayerDisconnect = () => {
    history.push(`/`);
  };
  // socket.on("connect", () => {
  //   console.log(socket.id);
  // });
  socket.on("gameCode", (code) => {
    setGameCode(code);
  });
  useEffect(() => {
    socket.emit("host");
  }, []);
  socket.on("player", (player) => {
    setPlayer(player);
  });
  socket.on("gameState", (game) => {
    setGameState(game);
    game.currentPlayer === thisPlayer
      ? setPlayerTurn("player-turn")
      : setPlayerTurn("not-player-turn");
  });
  socket.on("p2Online", () => {
    setShow("show");
  });
  socket.on("playerDisconnect", handlePlayerDisconnect);
  return (
    <div className={`tic-tac-toe-host`}>
      <PlayerIdentifier currentPlayer={thisPlayer} />
      <div className="game-code-display">Game Code: {gameCode}</div>
      {gameState && (
        <DisplaySocket
          data={{ ...gameState, handleClick, startGame, playerTurn }}
        />
      )}
      <PlayerTwoUP data={{ show, p }} />
    </div>
  );
}
