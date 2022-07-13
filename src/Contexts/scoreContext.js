import React, { useState, useEffect } from "react";
const ScoreContext = React.createContext();

function ScoreContextProvider(props) {
  const [state, setState] = useState({
    currentScore: 0,
    maxScore: localStorage.getItem("maxScore") || 0,
    end: false,
  });

  function updateState() {
    setState((prevState) => {
      let current = prevState.currentScore + 1;
      let max = prevState.maxScore;
      if (current > prevState.maxScore) {
        max = current;
      }

      let newEnd;
      console.log(current);
      if (current === 12) {
        console.log("PRRRRRRRRRRRRRRRRR");
        newEnd = true;
      } else {
        newEnd = false;
      }
      return {
        currentScore: current,
        maxScore: max,
        end: newEnd,
      };
    });
  }

  function toggleEnd() {
    setState((prev) => ({
      ...prev,
      end: !prev.end,
    }));
  }

  function resetScore() {
    setState((prev) => ({
      ...prev,
      currentScore: 0,
      end: true,
    }));
  }

  useEffect(() => {
    localStorage.setItem("maxScore", state.maxScore);
  }, [state.maxScore]);

  return (
    <ScoreContext.Provider
      value={{
        currentScore: state.currentScore,
        maxScore: state.maxScore,
        end: state.end,
        toggleEnd: toggleEnd,
        updateScore: updateState,
        resetScore: resetScore,
      }}
    >
      {props.children}
    </ScoreContext.Provider>
  );
}

export { ScoreContextProvider, ScoreContext };
