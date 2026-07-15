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
import { createFormsInitialValuesObject } from "../../../utils/formUtils.js";

export default function MusicForm() {
  const { collections } = useOutletContext();
  const musicFormEntriesArray = findParsedCollection("musics", collections);
  const musicFormInitialValues = createFormsInitialValuesObject(
    musicFormEntriesArray
  );
  console.log(
    "This is musics form initial values array",
    musicFormInitialValues
  );
  console.log(
    "This is musics form entries valyes array",
    musicFormEntriesArray
  );

  return (
    <div>
      This is my Musics Form
      <GenericForm
        formEntries={musicFormEntriesArray}
        inputInitialValues={musicFormInitialValues}
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
