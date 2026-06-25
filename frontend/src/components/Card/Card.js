//library imports
import React from "react";
import { useState, useEffect } from "react";
import { Edit } from "@mui/icons-material";

//configs import
import { Archives_API } from "../../config/api";

//UI imports
import "./Card.css";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

//component imports
import GenericForm from "../Forms/GenericForm/GenericForm";

//service import
import { editData, deleteData } from "../../services/fetch.service";

export default function Card({
  card,
  canEdit,
  selectedCollectionName,
  selectedCollectionsSchema,
  cardId
}) {
  // const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [editMode, setEditMode] = useState(false);

  //step 1 ) Creating Titles and their Values
  const titles = Object.keys(card);
  const values = Object.values(card);

  const cardURL = Archives_API + "/" + selectedCollectionName + "/" + cardId;

  //Debuggin logs :

  console.log("Card Rescived this data about itself ", card);
  console.log("Schema of the parent component", selectedCollectionsSchema);
  console.log("Card rescived the name of a collection", selectedCollectionName);
  console.log("Card ID is", cardId);
  console.log("URl to reach DB in case of Edit is", cardURL);

  return (
    <div className="card-container">
      {canEdit && (
        <div>
          <div>
            <Edit
              onClick={() => {
                setEditMode(!editMode);
              }}
            />
          </div>
          <div>
            <DeleteIcon
              onClick={() => {
                deleteData(cardURL);
                setEditMode(!editMode);
              }}
            />
          </div>
        </div>
      )}

      {editMode ? (
        <div>
          <p>
            Edit My
            {" " +
              selectedCollectionName.charAt(0).toUpperCase() +
              selectedCollectionName.slice(1, -1)}
          </p>
          <GenericForm
            inputInitialValues={card}
            formEntries={selectedCollectionsSchema}
            submitFunction={(values) => {
              console.log("edit URL is ", cardURL);
              editData(cardURL, values);
              setEditMode(false);
            }}
            button={
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            }
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
