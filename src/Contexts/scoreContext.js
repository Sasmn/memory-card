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
      let max = prevState.macScore;
      if (current > prevState.maxScore) {
        max = current;
      }

      return {
        currentScore: current,
        maxScore: max,
      };
    });
  }

  return (
    <ScoreContext.Provider
      value={{
        currentScore: state.currentScore,
        maxScore: state.maxScore,
        updateScore: updateState,
      }}
    >
      {props.children}
    </ScoreContext.Provider>
  );
}

export { ScoreContextProvider, ScoreContext };
