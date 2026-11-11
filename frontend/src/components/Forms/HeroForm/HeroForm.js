import React from "react";

//UI imports
import { Button } from "@mui/material";

//components import
import GenericForm from "../GenericForm/GenericForm";

//services imports
import postPersonalData from "../../../services/personalData.service";

export default function HeroForm({
  heroFormEntries,
  heroFormInputInitialValues
}) {
  // const heroFormEntriesArray = Object.keys(heroFormInputInitialValues);
  const heroFormInputInitialValuesArray = Object.keys(
    heroFormInputInitialValues
  );

  const heroFormEntriesArray = [heroFormEntries];

  //Logs
  console.log("heroForm Entries", heroFormEntries);
  console.log("heroForm Entries Array", heroFormEntriesArray);

  return (
    <div>
      <GenericForm
        formEntries={heroFormEntriesArray}
        inputInitialValues={heroFormEntriesArray}
        submitFunction={postPersonalData}
        button={
          <Button variant="contained" color="primary" type="submit">
            Add Info
          </Button>
        }
      />
    </div>
  );
}
