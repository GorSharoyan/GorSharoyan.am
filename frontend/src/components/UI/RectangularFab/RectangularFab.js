import React from "react";
import "./RectangularFab.css";

//UI imports
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

export default function RectangularFab({ onClick, textbox, icon }) {
  console.log("rectangular fab rescived this data", textbox);
  return (
    <div className="fab-wrapper">
      <div>
        <h2> {textbox}</h2>
      </div>
      <div>{icon}</div>
    </div>
  );
}
