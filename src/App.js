import "./styles/App.scss";
import Header from "./Components/Header";
import Main from "./Components/Main";
import React, { useContext } from "react";
import NewGame from "./Components/NewGame";
import { ScoreContext } from "./Contexts/scoreContext";

function App() {
  const context = useContext(ScoreContext);

  return (
    <div className="App">
      <div className={context.end ? "g-out" : "g-in"}>
        <div className="game">
          <Header />
          <Main />
        </div>
        <div className="rotate-help"></div>
      </div>
      <div className="background"></div>
      <NewGame />
    </div>
  );
}

export default App;
