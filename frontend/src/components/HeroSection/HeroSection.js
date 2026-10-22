import React from "react";
import { useState } from "react";

//UI
import { Box } from "@mui/material";
import { Edit } from "@mui/icons-material";

//component imports
import HeroView from "../Heroview/HeroView";
import HeroForm from "../Forms/HeroForm/HeroForm";

export default function HeroSection({ canEdit, personalData }) {
  const [editMode, setEditMode] = useState(false);
  console.log("herosection", personalData);
  return (
    <Box
      sx={{
        width: 800,
        minHeight: 200,
        borderRadius: 5,
        border: "1px solid",
        borderColor: "divider",
        p: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <div>
        {canEdit ? (
          <div>
            <div>
              <Edit
                onClick={() => {
                  setEditMode(!editMode);
                }}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        {editMode ? <HeroForm /> : <HeroView personalData={personalData} />}
      </div>
    </Box>
  );
}
