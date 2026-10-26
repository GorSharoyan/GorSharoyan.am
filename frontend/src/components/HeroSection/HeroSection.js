import React from "react";
import { useState } from "react";

//UI
import { Box } from "@mui/material";
import { Edit } from "@mui/icons-material";

//component imports
import HeroView from "../Heroview/HeroView";
import HeroForm from "../Forms/HeroForm/HeroForm";

//Services and Utils imports
import { parseToObjecEntries } from "../../utils/formUtils";

export default function HeroSection({ canEdit, personalData }) {
  const [editMode, setEditMode] = useState(false);
  const heroFormInputInitialValues = parseToObjecEntries(personalData);
  console.log("herosection", personalData);
  console.log("heroForm input initial values", heroFormInputInitialValues);
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
        {editMode ? (
          <HeroForm heroFormInputInitialValues={heroFormInputInitialValues} />
        ) : (
          <HeroView personalData={personalData} />
        )}
      </div>
    </Box>
  );
}
