import React from "react";

// components import
import Card from "../Card/Card";

export default function CardArray({ cardArray }) {
  let cardArrayRendered = [];
  for (let i = 0; i < cardArray.length; i++) {
    cardArrayRendered.push(<Card key={i} card={cardArray[i]} />);
  }
  return <div>{cardArrayRendered}</div>;
}
