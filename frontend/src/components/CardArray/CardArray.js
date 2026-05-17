import React from "react";
import { useOutletContext } from "react-router-dom";

// components import
import Card from "../Card/Card";

//utils imports
import findParsedCollection from "../../utils/DBCollectionsUtils.js";

export default function CardArray() {
  const { collections, canEdit } = useOutletContext();
  let collectiontoRender = [];

  console.log("cardArray received this data", collections, canEdit);
  collectiontoRender = findParsedCollection("books", collections);
  console.log("collection to render is", collectiontoRender);

  let cardArrayRendered = [];

  // for (let i = 0; i < collectiontoRender.length; i++) {
  //   console.log("collection to render in loop is", collectiontoRender[i]);
  //   const names = collectiontoRender[i].name || [];
  //   console.log("fields of collection to render are", name);
  //   for (let j = 0; j < names.length; j++) {
  //     if (names[j].name === "name") {
  //       console.log("field", name[j]);
  //       cardArrayRendered.push(
  //         <Card key={`${i}-${j}`} card={names[j]} canEdit={canEdit} />
  //       );
  //     }
  //   }
  // }

  console.log("card array rendered is", cardArrayRendered);

  return <div>{cardArrayRendered}</div>;
}
// { cardArray, canEdit, collectionName }
