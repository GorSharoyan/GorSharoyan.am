import React from "react";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components import
import Card from "../Card/Card";

//utils imports
import findParsedCollection from "../../utils/DBCollectionsUtils.js";

//UI imports

import Pagination from "@mui/material/Pagination";

export default function CardArray({
  collections,
  canEdit,
  selectedCollectionName,
  selectedCollectionsSchema,
  arrayReloadLogic,
  arrayReloadState
}) {
  //1)this hook is dedicated for pagination components usage
  const [page, setPage] = useState(1);
  //2) this custome hook and asigned value to it is dedicatd to navigate to the dedicated forms .
  //It is called in case if someone does have admin privilages and wants to add data/item to the selected collection
  const navigate = useNavigate();

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
              cardId={card._id}
              arrayReloadLogic={arrayReloadLogic}
              arrayReloadState={arrayReloadState}
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
