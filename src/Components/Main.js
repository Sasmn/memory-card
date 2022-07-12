import React, { useState, useEffect } from "react";
import "../styles/Main.scss";
import Card from "./Card";
import { nanoid } from "nanoid";

const Main = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    function importAllImages(i) {
      return i.keys().map(i);
    }

    const images = importAllImages(
      require.context("../Images", false, /\.(png|jpe?g|svg)$/)
    );

    const str = "/static/media/";

    let updatedCards = images.map((img) => ({
      key: nanoid(),
      name: img.slice(str.length, img.indexOf(".")),
      src: img,
      clicked: false,
    }));

    setCards(updatedCards);
  }, []);

  function handleClick(key) {
    let updatedState = cards.map((card) => {
      if (card.key === key) {
        return {
          ...card,
          clicked: true,
        };
      }
      return card;
    });
    setCards(updatedState);
  }

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
