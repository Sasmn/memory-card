import React, { useState } from "react";
const ScoreContext = React.createContext();

function ScoreContextProvider(props) {
  const [state, setState] = useState({
    currentScore: 0,
    maxScore: 0,
  });

  function updateState() {
    setState((prevState) => {
      let current = prevState.currentScore + 1;
      let max = prevState.maxScore;
      if (current > prevState.maxScore) {
        max = current;
      }

      return {
        currentScore: current,
        maxScore: max,
      };
    });
  }

  console.log(state);
  function resetScore() {
    setState((prev) => ({
      currentScore: 0,
      maxScore: prev.maxScore,
    }));
  }

  return (
    <ScoreContext.Provider
      value={{
        currentScore: state.currentScore,
        maxScore: state.maxScore,
        updateScore: updateState,
        resetScore: resetScore,
      }}
    >
      {props.children}
    </ScoreContext.Provider>
  );
}

export { ScoreContextProvider, ScoreContext };
