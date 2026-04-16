//library imports
import React from "react";
import { useState, useEffect } from "react";

//UI imports
import { Edit } from "@mui/icons-material";

export default function Card({ card, canEdit }) {
  const [isEditEnabled, setIsEditEnabled] = useState(false);

  useEffect(() => {
    if (canEdit) {
      setIsEditEnabled(true);
    }
  }, [canEdit]);

  return (
    <div>
      <div>
        <h1>{card.author}</h1>
        <p>{card.name}</p>
      </div>
      {isEditEnabled && (
        <div>
          <Edit onClick={() => console.log("Edit clicked")} />
        </div>
      )}
    </div>
  );
}
