import React from "react";
import "../styles/Card.scss";

const Card = (props) => {
  return (
    <div onClick={() => props.handleClick(props.id)} className="card">
      <img src={props.src} alt={props.name} />
      <h4>{props.name}</h4>
    </div>
  );
};

export default Card;
