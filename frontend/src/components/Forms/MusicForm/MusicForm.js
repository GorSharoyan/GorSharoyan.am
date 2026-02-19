//Library imports
import React from "react";
import { Button } from "@mui/material";

//components imports
import GenericForm from "../GenericForm/GenericForm.js";

//services imports
import { postMusic } from "../../../services/music.service.js";

export default function musicForm() {
  let musicFormEntries = {};
  return (
    <div>
      <GenericForm
        formEntries={musicFormEntries}
        submitFunction={postMusic(values)}
        button={<Button />}
      />
      ;
    </div>
  );
}
