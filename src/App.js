import "./styles/App.scss";
import Header from "./Components/Header";
import Main from "./Components/Main";
import React, { useState } from "react";

function App() {
  const [ended, setEnded] = useState(false);

  function toggleEnded() {
    setEnded(true);

    console.log("VÉGE");
  }
  return (
    <div className="App">
      <Header ended={ended} />
      <Main toggleEnded={toggleEnded} ended={ended} />
    </div>
  );
}

export default App;
