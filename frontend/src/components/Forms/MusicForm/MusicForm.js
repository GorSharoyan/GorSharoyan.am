//Library imports
import React from "react";
import { Button } from "@mui/material";
import { useOutletContext } from "react-router-dom";

//components imports
import GenericForm from "../GenericForm/GenericForm.js";

//services imports
import postMusics from "./../../../services/musics.service.js";
//utils imports
import findParsedCollection from "../../../utils/DBCollectionsUtils.js";

export default function MusicForm() {
  const { collections } = useOutletContext();
  const musicFormEntriesArray = findParsedCollection("musics", collections);

  return (
    <div>
      This is my Movies Form
      <GenericForm
        inputInitalValues={musicFormEntriesArray}
        formEntries={musicFormEntriesArray}
        submitFunction={postMusics}
        button={
          <Button variant="contained" color="primary" type="submit">
            Add Music
          </Button>
        }
      />
    </div>
  );
}
