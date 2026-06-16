//Library imports
import React from "react";
import { Button } from "@mui/material";
import { useOutletContext } from "react-router-dom";
//components imports
import GenericForm from "../GenericForm/GenericForm.js";

//services imports
import postBooks from "../../../services/books.service.js";

//utils imports
import findParsedCollection from "../../../utils/DBCollectionsUtils.js";
import { createFormsInitialValuesObject } from "../../../utils/formUtils.js";

export default function BooksForm() {
  const { collections } = useOutletContext();
  const booksFormEntriesArray = findParsedCollection("books", collections);
  console.log("Books Entries Array is ", booksFormEntriesArray);

  const booksFormInitialValues = createFormsInitialValuesObject(
    booksFormEntriesArray
  );
  console.log("Books Form initial Values are", booksFormInitialValues);
  let a = booksFormInitialValues;
  return (
    <div>
      This is my Books Form
      <GenericForm
        inputInitialValues={booksFormInitialValues}
        formEntries={booksFormEntriesArray}
        submitFunction={postBooks}
        button={
          <Button variant="contained" color="primary" type="submit">
            Add Book
          </Button>
        }
      />
    </div>
  );
}
