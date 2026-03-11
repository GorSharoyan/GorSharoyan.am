//Library imports
import React from "react";
import { Button } from "@mui/material";
import { useOutletContext } from "react-router-dom";

//components imports
import GenericForm from "../GenericForm/GenericForm.js";

//services imports
import { postMusic } from "../../../services/music.service.js";
//utils imports
import findParsedCollection from "../../../utils/DBCollectionsUtils.js";

export default function MusicForm() {
  const { collections } = useOutletContext();
  const musicFormEntriesArray = findParsedCollection("music", collections);

  return (
    <div>
      This is my Movies Form
      <GenericForm
        formEntries={musicFormEntriesArray}
        // submitFunction={postMovies}
        button={
          <Button variant="contained" color="primary" type="submit">
            Add Music
          </Button>
        }
      />
    </div>
  );
}
