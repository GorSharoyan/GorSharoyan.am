import React from "react";

//components imports
import CardArray from "../CardArray/CardArray";

export default function Projects({ projects, canEdit }) {
  return (
    <div>
      This is the section wer i will share information about my proejcts
      <CardArray
        collections={projects}
        canEdit={canEdit}
        selectedCollectionName="projects"
      />
    </div>
  );
}
