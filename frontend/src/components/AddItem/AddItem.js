//lib imports
import React from "react";

//UI imports
import RectangularFab from "../UI/RectangularFab/RectangularFab";
import AddIcon from "@mui/icons-material/Add";

export default function AddItem({ onClick, itemName }) {
  return (
    <RectangularFab
      textbox={`Add ${itemName}`}
      icon={
        <button onClick={onClick}>
          <AddIcon />
        </button>
      }
    />
  );
}
