import React, { useRef, useEffect } from "react";
import "../styles/Card.scss";
import { FastAverageColor } from "fast-average-color";
const fac = new FastAverageColor();

const Card = (props) => {
  const img = useRef();
  const card = useRef();
  useEffect(() => {
    fac
      .getColorAsync(img.current, {
        ignoredColor: [255, 255, 255, 255, 20],
      })
      .then((color) => {
        card.current.style.backgroundColor = color.rgba;
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <div className="card">
      <div
        ref={card}
        onClick={() => props.handleClick(props.id)}
        className="card-inside"
      >
        <img
        //   crossorigin="anonymous"
          ref={img}
          src={props.src}
          alt={props.name}
        />
        <h4>{props.name}</h4>
      </div>
    </div>
  );
};

export default Card;
