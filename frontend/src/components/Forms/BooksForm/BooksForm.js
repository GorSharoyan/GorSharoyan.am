//Library imports
import React from "react";
import { Button } from "@mui/material";

//components imports
import GenericForm from "../GenericForm/GenericForm.js";

//services imports
import { postBooks } from "./../../../services/books.service.js";

export default function BooksForm() {
  let booksFormEntries = {};
  return (
    <div>
      <GenericForm
        formEntries={booksFormEntries}
        submitFunction={postBooks(values)}
        button={<Button />}
      />
      ;
    </div>
  );
}
