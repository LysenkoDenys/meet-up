import React from "react";
import clsssesCard from "./Card.module.css";

const Card = (props) => {
  return <div className={clsssesCard.card}>{props.children}</div>;
};

export default Card;
