import React from "react";

export default function DisplaySocket(props) {
  const {
    currentPlayer,
    board,
    winner,
    endGame,
    handleClick,
    startGame,
    playerTurn,
  } = props.data;
  // console.log(props.data);
  return (
    <div className="DisplaySocket">
      <div className={`board ${currentPlayer}`} id="board">
        <div
          className={`cell ${board[0]} ${playerTurn}`}
          id="0"
          data-cell
          onClick={handleClick}
        ></div>
        <div
          className={`cell ${board[1]} ${playerTurn}`}
          id="1"
          data-cell
          onClick={handleClick}
        ></div>
        <div
          className={`cell ${board[2]} ${playerTurn}`}
          id="2"
          data-cell
          onClick={handleClick}
        ></div>
        <div
          className={`cell ${board[3]} ${playerTurn}`}
          id="3"
          data-cell
          onClick={handleClick}
        ></div>
        <div
          className={`cell ${board[4]} ${playerTurn}`}
          id="4"
          data-cell
          onClick={handleClick}
        ></div>
        <div
          className={`cell ${board[5]} ${playerTurn}`}
          id="5"
          data-cell
          onClick={handleClick}
        ></div>
        <div
          className={`cell ${board[6]} ${playerTurn}`}
          id="6"
          data-cell
          onClick={handleClick}
        ></div>
        <div
          className={`cell ${board[7]} ${playerTurn}`}
          id="7"
          data-cell
          onClick={handleClick}
        ></div>
        <div
          className={`cell ${board[8]} ${playerTurn}`}
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
