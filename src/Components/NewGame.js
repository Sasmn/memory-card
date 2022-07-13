import React, { useContext, useRef } from "react";
import { ScoreContext } from "../Contexts/scoreContext";
import "../styles/NewGame.scss";

const NewGame = () => {
  const context = useContext(ScoreContext);
  const page = useRef();

  return (
    <div ref={page} className={context.end === true ? "page in" : "page out"}>
      <h1>
        Congratulations, you won! Your score is 12, you found every image!
      </h1>
      <button onClick={context.toggleEnd}>New game</button>
    </div>
  );
};

export default NewGame;
