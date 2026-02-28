//Library imports
import React from "react";
import { Button } from "@mui/material";

//components imports
import GenericForm from "../GenericForm/GenericForm.js";

//services imports
import { postMusic } from "../../../services/music.service.js";

export default function MusicForm() {
  let musicFormEntries = {};
  return (
    <div>
      This is my Music Form
      <GenericForm
        formEntries={musicFormEntries}
        // submitFunction={postMusic(values)}
        button={<Button />}
      />
      ;
    </div>
  );
}
