import React, { useState, useContext } from "react";
import "../styles/Main.scss";
import Card from "./Card";
import { nanoid } from "nanoid";
import { ScoreContext } from "../Contexts/scoreContext";

const Main = () => {
  /* importing the images and using them to set the default state */
  function importAllImages(i) {
    return i.keys().map(i);
  }
  const images = importAllImages(
    require.context("../Images", false, /\.(png|jpe?g|svg)$/)
  );
  const str = "/static/media/";

  const [cards, setCards] = useState(
    images.map((img) => ({
      key: nanoid(),
      name: img.slice(str.length, img.indexOf(".")),
      src: img,
      clicked: 0,
    }))
  );

  /* randomly shuffle the cards, and set as new state */
  function shuffleCards(prevState) {
    let newState = prevState
      .map((card) => ({ card, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ card }) => card);

    return newState;
    // setCards(newState);
  }

  /* update the clicked attribute of the cards, and shuffle them on click, plus update the scoreline */
  function handleClick(key) {
    /* update cards state by incrementing the clicked value of the clicked card */
    let updatedState = cards.map((card) => {
      if (card.key === key) {
        return {
          ...card,
          clicked: card.clicked + 1,
        };
      }
      return card;
    });

    /* if it's game over, then reset the score, and reset the cards state. If it's still game on, simply update the scoreline */
    if (!updatedState.every((card) => card.clicked <= 1)) {
      context.resetScore();
      updatedState = resetCardsClicked();
    } else {
      context.updateScore();
    }
    /* always shuffle the cards */
    updatedState = shuffleCards(updatedState);

    /* and change the state only ones, at the and of the function */
    setCards(updatedState);
  }

  const context = useContext(ScoreContext);

  /* resetting the card state back to default */
  function resetCardsClicked() {
    const newCards = cards.map((card) => {
      return { ...card, clicked: 0 };
    });

    return newCards;
  }

  /* create the cards */
  const cardElements = cards.map((c) => (
    <Card
      key={c.key}
      name={c.name}
      src={c.src}
      id={c.key}
      handleClick={handleClick}
    />
  ));

  return <main>{cardElements}</main>;
};

export default Main;
