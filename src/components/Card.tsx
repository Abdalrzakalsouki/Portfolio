import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "../css/card.css";

interface CardData {
  icon: IconDefinition;
  title: string;
  text: string;
}

const Card = React.memo((props: CardData) => {
  return (
    <div className="card">
      <div className="card-header">
        <FontAwesomeIcon icon={props.icon} />
        <h3>{props.title}</h3>
      </div>
      <div className="card-body">
        <p>{props.text}</p>
      </div>
    </div>
  );
});

export default Card;
