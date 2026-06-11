//library imports
import React from "react";
import { useState, useEffect } from "react";
import { Edit } from "@mui/icons-material";

//UI imports
import "./Card.css";

//component imports
import GenericForm from "../Forms/GenericForm/GenericForm";

export default function Card({
  card,
  canEdit,
  selectedCollectionName,
  selectedCollectionsSchema
}) {
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);

  //step 1 ) Creating Titles and their Values
  const titles = Object.keys(card);
  const values = Object.values(card);

  console.log("debugging Tytles as a data type " + typeof titles);
  console.log("Card Rescived this data about itself ", card);
  console.log(
    "inhereted Schema of the parent component",
    selectedCollectionsSchema
  );
  console.log(
    "card rescived the name of a parsed collection",
    selectedCollectionName
  );

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
    <div className="card-container">
      {isEditEnabled && !isEditModeEnabled && (
        <Edit onClick={handleEditClick} />
      )}

      {isEditModeEnabled ? (
        <div>
          <p>
            Edit My
            {" " +
              selectedCollectionName.charAt(0).toUpperCase() +
              selectedCollectionName.slice(1, -1)}
          </p>
          <GenericForm
            formEntries={selectedCollectionsSchema}
            submitFunction={() => {}}
            button={<button>Submit</button>}
          />
        </div>
      ) : (
        <div>
          {titles.map((title, index) => (
            <div key={index}>
              <h4>{title}</h4>
              <p>{values[index]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
