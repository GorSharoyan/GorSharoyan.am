import React from "react";
import { useState } from "react";

//UI
import { Avatar, Box } from "@mui/material";
import { Edit } from "@mui/icons-material";

//component imports
import HeroView from "./HeroView";
import HeroForm from "./HeroForm";

export default function HeroSection({ canEdit, heroSectionData }) {
  const [editMode, setEditMode] = useState(true);

  return (
    <div>
      <div>
        {canEdit ? (
          <div>
            <Edit
              onClick={() => {
                setEditMode(!editMode);
              }}
            />
          </div>
        ) : (
          <div>
            <HeroView />
          </div>
        )}
      </div>
      <div>{editMode ? <HeroForm /> : <HeroView />}</div>
    </div>
  );
}
