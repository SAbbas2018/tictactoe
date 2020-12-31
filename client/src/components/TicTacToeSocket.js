import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function TicTacToeSocket(props) {
  const history = useHistory();
  const [gameCode, setGameCode] = useState();
  const handleHostGame = (e) => {
    e.preventDefault();
    history.push("/tictactoe/host-game");
  };
  const handelJoinGame = (e) => {
    e.preventDefault();
    history.push(`/tictactoe/join-game/:${gameCode}`);
  };
  return (
    <div className="Gameroom-options-container">
      <button
        className="btn btn-success btn-block host-game"
        onClick={handleHostGame}
      >
        Host Game
      </button>
      <h3 className="options-spacer">Or</h3>
      <form className="join-game-form">
        <div className="form-group">
          <input
            type="text"
            className="form-control join-game-text"
            id="gamecode"
            placeholder="Enter game code"
            onChange={(e) => {
              setGameCode(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary btn-block" onClick={handelJoinGame}>
          Join Game
        </button>
      </form>
    </div>
  );
}

export default TicTacToeSocket;
