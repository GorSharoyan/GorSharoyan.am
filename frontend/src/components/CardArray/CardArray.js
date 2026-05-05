import React from "react";

// components import
import Card from "../Card/Card";

export default function CardArray({ cardArray, canEdit }) {
  console.log("cardArray received this data", cardArray);

  let cardArrayRendered = [];

  for (let i = 0; i < cardArray.length; i++) {
    const fields = cardArray[i].fields || [];

    for (let j = 0; j < fields.length; j++) {
      if (fields[j].name === "name") {
        // console.log("field",fields[j])
        cardArrayRendered.push(
          <Card key={`${i}-${j}`} card={fields[j]} canEdit={canEdit} />
        );
      }
    }
  }

  // console.log("card array rendered is", cardArrayRendered);

  return <div>{cardArrayRendered}</div>;
}
