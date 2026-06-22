import React from "react";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

// components import
import Card from "../Card/Card";

//utils imports
import findParsedCollection from "../../utils/DBCollectionsUtils.js";
import { Pagination } from "@mui/material";

export default function CardArray({
  collections,
  canEdit,
  selectedCollectionName,
  selectedCollectionsSchema
}) {
  //this hook is dedicated for pagination components usage
  const [page, setPage] = useState(1);
  const cardsPerPage = 2;

  const start = (page - 1) * cardsPerPage;
  const end = start + cardsPerPage;

  const pageCount = Math.ceil(collections.length / cardsPerPage);
  const paginatedArray = collections.slice(start, end);

  //debugging
  console.log("cardArray received this data", collections, canEdit);
  console.log("cardArrays Page count is equal to", pageCount);

  return (
    <div>
      <div>
        {paginatedArray?.map((card, index) => {
          return (
            <Card
              selectedCollectionName={selectedCollectionName}
              card={card}
              key={index}
              canEdit={canEdit}
              selectedCollectionsSchema={selectedCollectionsSchema}
            />
          );
        })}
      </div>
      <div>
        <Pagination
          page={page}
          count={pageCount}
          onChange={(event, value) => setPage(value)}
        />
      </div>
    </div>
  );
}
