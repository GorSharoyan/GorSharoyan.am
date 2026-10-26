import React from "react";

//UI imports
import { Button } from "@mui/material";

//components import
import GenericForm from "../GenericForm/GenericForm";

//services imports
import postPersonalData from "../../../services/personalData.service";

export default function HeroForm(heroFormEntries, heroFormInputInitialValues) {
  return (
    <div>
      <GenericForm
        formEntries={heroFormEntries}
        inputInitialValues={heroFormInputInitialValues}
        submitFunction={postPersonalData}
        button={
          <Button variant="contained" color="primary" type="submit">
            Add Movie
          </Button>
        }
      />
    </div>
  );
}
