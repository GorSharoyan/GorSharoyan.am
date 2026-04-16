//library imports
import React from "react";
import { useState, useEffect } from "react";
import { Edit } from "@mui/icons-material";

import GenericForm from "../Forms/GenericForm/GenericForm.js";

export default function Card({ card, canEdit }) {
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);

  //This function helps to reach the form that will re-redner data in the card we are willing to edit
  const handleEditClick = () => {
    setIsEditModeEnabled(true);
  };

  // this useEffect is responsible for understanding if user has the right to edit the card .
  useEffect(() => {
    if (canEdit) {
      setIsEditEnabled(true);
    } else {
      setIsEditEnabled(false);
    }
  }, [canEdit]);

  return (
    <div>
      {isEditEnabled && !isEditModeEnabled && (
        <Edit onClick={handleEditClick} />
      )}

      {isEditModeEnabled ? (
        <div>
          <p>Edit {card.name}</p>
          <GenericForm
            // formEntries={card}
            submitFunction={() => {}}
            button={<button>Submit</button>}
          />
        </div>
      ) : (
        <div>
          <h1>{card.author}</h1>
          <p>{card.name}</p>
        </div>
      )}
    </div>
  );
}
