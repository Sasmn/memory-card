import React, { useState } from "react";
import "../styles/Score.scss";

const Score = () => {
  const [scores, setScores] = useState({
    currentScore: 0,
    maxScore: 0,
  });

  function handleChange() {}

  return (
    <div className="score">
      <h2>Current score: {scores.currentScore}</h2>
      <span> - </span>
      <h2>Highest score: {scores.maxScore}</h2>
    </div>
  );
};

export default Score;
