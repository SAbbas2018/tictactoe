import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { SocketContext } from "../context/socket";
import DisplaySocket from "./DisplaySocket";
// import DisconnectModal from "./DisconnectModal";
export default function JoinGame() {
  const history = useHistory();
  let { gameCode } = useParams();
  gameCode = gameCode.substring(1);
  const socket = useContext(SocketContext);
  const [thisPlayer, setPlayer] = useState();
  const handlePlayerDisconnect = () => {
    history.push(`/`);
  };
  //   const [gameCode, setGameCode] = useState("");
  const [gameState, setGameState] = useState();
  const [playerTurn, setPlayerTurn] = useState("");
  //   socket.emit("joinGame", gameCode);
  useEffect(() => {
    socket.emit("joinGame", gameCode);
  }, []);
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
  // socket.on("connect", () => {
  //   console.log(socket.id);
  // });

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
    <div className={`tic-tac-toe-joinGame`}>
      {/* <div className="game-code-display">Game Code: {gameCode}</div> */}
      {gameState && (
        <DisplaySocket
          data={{ ...gameState, handleClick, startGame, playerTurn }}
        />
      )}
    </div>
  );
}
