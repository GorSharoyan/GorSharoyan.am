//Library imports
import React from "react";
import { Button } from "@mui/material";
import { useOutletContext } from "react-router-dom";
//components imports
import GenericForm from "../GenericForm/GenericForm.js";

//services imports
import { postBooks } from "./../../../services/books.service.js";
//utils imports
import findParsedCollection from "../../../utils/DBCollectionsUtils.js";

export default function BooksForm() {
  const { collections } = useOutletContext();
  const booksFormEntriesArray = findParsedCollection("books", collections);

  return (
    <div>
      This is my Movies Form
      <GenericForm
        formEntries={booksFormEntriesArray}
        // submitFunction={postMovies}
        button={
          <Button variant="contained" color="primary" type="submit">
            Add Book
          </Button>
        }
      />
    </div>
  );
}
