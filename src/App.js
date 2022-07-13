import "./styles/App.scss";
import Header from "./Components/Header";
import Main from "./Components/Main";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <div className="background"></div>
    </div>
  );
}

export default App;
