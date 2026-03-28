//Library imports
import React from "react";
import { Button } from "@mui/material";
import { useOutletContext } from "react-router-dom";
//components imports
import GenericForm from "../GenericForm/GenericForm.js";

//services imports
import postMovies from "./../../../services/movies.service.js";
//utils imports
import findParsedCollection from "../../../utils/DBCollectionsUtils.js";

export default function MoviesForm() {
  const { collections } = useOutletContext();
  const moviesFormEntriesArray = findParsedCollection("movies", collections);

  return (
    <div>
      This is my Movies Form
      <GenericForm
        formEntries={moviesFormEntriesArray}
        submitFunction={postMovies}
        button={
          <Button variant="contained" color="primary" type="submit">
            Add Movie
          </Button>
        }
      />
    </div>
  );
}
