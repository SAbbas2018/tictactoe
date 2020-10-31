import React from "react";
import { useHistory } from "react-router-dom";
export default function Header() {
  const history = useHistory();
  const handleBackToHome = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div className="App-header">
      <div className="back-to-home">
        <button
          type="button"
          className="btn btn-primary btn-lg home-button"
          onClick={handleBackToHome}
        >
          Home
        </button>
      </div>
      <header className="header-text">Tic Tac Toe</header>
    </div>
  );
}
