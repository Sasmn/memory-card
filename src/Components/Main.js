import React, { useState, useContext } from "react";
import "../styles/Main.scss";
import Card from "./Card";
import { nanoid } from "nanoid";
import { ScoreContext } from "../Contexts/scoreContext";
import useDidUpdate from "../CustomHooks/useDidUpdate";

const Main = (props) => {
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
      clicked: false,
    }))
  );

  /* check, if the card has been already clicked */
  function checkForEnd(clicked) {
    if (clicked === true) {
      props.toggleEnded();
    }
  }

  /* randomly shuffle the cards, and set as new state */
  function shuffleCards(prevState) {
    let newState = prevState
      .map((card) => ({ card, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ card }) => card);

    setCards(newState);
  }

  /* update the clicked attribute of the cards, and shuffle them on click, plus update the scoreline */
  function handleClick(key) {
    let updatedState = cards.map((card) => {
      if (card.key === key) {
        checkForEnd(card.clicked);
        return {
          ...card,
          clicked: true,
        };
      }
      return card;
    });
    shuffleCards(updatedState);
  }

  const context = useContext(ScoreContext);

  useDidUpdate(() => {
    if (props.ended === false) {
      context.updateScore();
    } else if (props.ended === true && context.currentScore !== 0) {
      props.toggleEnded();
      context.resetScore();
      resetCardsClicked();
    }
  }, [cards]);

  function resetCardsClicked() {
    const newCards = cards.map((card) => {
      return { ...card, clicked: false };
    });
    setCards(newCards);
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

  console.log(cards);
  return <main>{cardElements}</main>;
};

export default Main;
