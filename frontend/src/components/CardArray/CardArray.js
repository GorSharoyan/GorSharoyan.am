import React from "react";

// components import
import Card from "../Card/Card";

export default function CardArray({ cardArray, canEdit }) {
  let cardArrayRendered = [];
  for (let i = 0; i < cardArray.length; i++) {
    cardArrayRendered.push(
      <Card key={i} card={cardArray[i]} canEdit={canEdit} />
    );
  }
  return <div>{cardArrayRendered}</div>;
}
