//library imports
import React from "react";
import { useState, useEffect } from "react";
import { Edit } from "@mui/icons-material";

//UI imports
import "./Card.css";

//component imports
import GenericForm from "../Forms/GenericForm/GenericForm.js";
import BooksForm from "../Forms/BooksForm/BooksForm.js";

export default function Card({ card, canEdit }) {
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);

  //step 1 ) Creating Titles and their Values
  const titles = Object.keys(card);
  const values = Object.values(card);
  console.log("card titles are", titles);

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
          <p>Edit</p>
          <BooksForm />
          {/* <GenericForm
            formEntries={titles}
            submitFunction={() => {}}
            button={<button>Submit</button>}
          /> */}
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
