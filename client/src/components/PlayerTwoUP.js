import React from "react";

export default function PlayerTwoUP(props) {
  const { show, p } = props.data;
  console.log(props);
  let otherP;
  if (p === 1) {
    otherP = "2";
  } else {
    otherP = "1";
  }
  return (
    <div className={`p2up-container bg-success ${show}`}>
      <p className="alert-text">Player {otherP} is now online</p>
    </div>
  );
}
