import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  //   const [gameType, setGameType] = useState();
  const handleBaseGame = (e) => {
    e.preventDefault();
    history.push("/tictactoe");
  };
  const handleAIGame = (e) => {
    e.preventDefault();
    history.push("/tictactoe/ai");
  };
  return (
    <section className="home-page">
      <article className="option">
        <div className="base-tic-tac-toe"></div>
        <div className="info">
          <header className="mode-header">Basic TicTacToe with a friend</header>
          <button
            type="button"
            className="btn btn-success btn"
            onClick={handleBaseGame}
          >
            Play
          </button>
        </div>
      </article>
      <article className="option">
        <div className="base-tic-tac-toe"></div>
        <div className="info">
          <header className="mode-header">
            Play Tic Tac Toe against a Computer
          </header>
          <button
            type="button"
            className="btn btn-success btn"
            onClick={handleAIGame}
          >
            Play
          </button>
        </div>
      </article>
      <article className="option">
        <div className="base-tic-tac-toe"></div>
        <div className="info">
          <header className="mode-header">Basic TicTacToe with a friend</header>
          <button
            type="button"
            className="btn btn-success btn"
            onClick={handleBaseGame}
          >
            Play
          </button>
        </div>
      </article>
    </section>
  );
}

export default Home;
