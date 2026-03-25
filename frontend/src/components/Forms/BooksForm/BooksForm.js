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

export default function BooksForm() {
  const { collections } = useOutletContext();
  const booksFormEntriesArray = findParsedCollection("books", collections);
  console.log("books form Entries Array", booksFormEntriesArray);

  async function handlePostData() {
    return await postBooks;
  }

  return (
    <div>
      This is my Books Form
      <GenericForm
        inputInitalValues={booksFormEntriesArray}
        formEntries={booksFormEntriesArray}
        submitFunction={handlePostData}
        button={
          <Button variant="contained" color="primary" type="submit">
            Add Book
          </Button>
        }
      />
    </div>
  );
}
