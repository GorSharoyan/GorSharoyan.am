import React from "react";

//UI imports :
import { Avatar, Box } from "@mui/material";

export default function HeroView({ heroData }) {
  return (
    <div>
      <div>
        <Avatar
          src="https://example.com/profile.jpg"
          sx={{
            width: 100,
            height: 100
          }}
        />
      </div>
      <Box
        sx={{
          width: 400,
          minHeight: 200,
          borderRadius: 5,
          border: "1px solid",
          borderColor: "divider",
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 1
        }}
      >
        This is a place for a short bio
      </Box>
    </div>
  );
}
