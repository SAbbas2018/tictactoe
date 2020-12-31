import React, { useState, useEffect, useContext } from "react";
import { SocketContext } from "../context/socket";
import DisplaySocket from "./DisplaySocket";
import { useHistory } from "react-router-dom";
export default function TicTacToeHost() {
  const socket = useContext(SocketContext);
  const history = useHistory();
  const [thisPlayer, setPlayer] = useState();
  const [gameCode, setGameCode] = useState("");
  const [gameState, setGameState] = useState();
  const [playerTurn, setPlayerTurn] = useState("");
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
  socket.on("playerDisconnect", handlePlayerDisconnect);
  return (
    <div className={`tic-tac-toe-host`}>
      <div className="game-code-display">Game Code: {gameCode}</div>
      {gameState && (
        <DisplaySocket
          data={{ ...gameState, handleClick, startGame, playerTurn }}
        />
      )}
    </div>
  );
}
