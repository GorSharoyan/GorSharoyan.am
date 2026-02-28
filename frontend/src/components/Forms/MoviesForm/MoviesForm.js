//Library imports
import React from "react";
import { Button } from "@mui/material";

//components imports
import GenericForm from "../GenericForm/GenericForm.js";

//services imports
import { postMovies } from "./../../../services/movies.service.js";

export default function MoviesForm() {
  let movieFormEntries = {};
  return (
    <div>
      This is my Movies Form
      <GenericForm
        formEntries={movieFormEntries}
        // submitFunction={postMovies(values)}
        button={<Button />}
      />
      ;
    </div>
  );
}
