import React from "react";

export default function PlayerIdentifier(props) {
  const { currentPlayer } = props;
  return (
    <div className="card bg-info identifier">
      <div className="card-body">
        <p> You are: {currentPlayer} </p>
        <p> </p>
      </div>
    </div>
  );
}
