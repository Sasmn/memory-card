import React, { useContext } from "react";
import "../styles/Score.scss";
import { ScoreContext } from "../Contexts/scoreContext";

const Score = () => {
  const context = useContext(ScoreContext);

  return (
    <div className="score">
      <h2>Current score: {context.currentScore}</h2>
      <span> - </span>
      <h2>Highest score: {context.maxScore}</h2>
    </div>
  );
};

export default Score;
