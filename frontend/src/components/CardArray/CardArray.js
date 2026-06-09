import React from "react";
import { useOutletContext } from "react-router-dom";

// components import
import Card from "../Card/Card";

//utils imports
import findParsedCollection from "../../utils/DBCollectionsUtils.js";

export default function CardArray({ collections, canEdit }) {
  console.log("cardArray received this data", collections, canEdit);

  return (
    <div>
      {collections?.map((collection, index) => {
        return <Card card={collection} key={index} canEdit={canEdit} />;
      })}
    </div>
  );
}
