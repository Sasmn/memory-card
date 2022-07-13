import React from "react";
import Score from "./Score";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <h1>Memory game</h1>
      {/* <p>Click every card ones!</p> */}
      <Score />
    </header>
  );
};

export default Header;
