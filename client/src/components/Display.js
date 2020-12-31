import React from "react";

export default function Display(props) {
  const {
    currentPlayer,
    board,
    winner,
    endGame,
    handleClick,
    startGame,
  } = props.data;
  // console.log(props.data);
  return (
    <div>
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
