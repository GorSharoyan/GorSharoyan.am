import React from "react";

//UI
import { Avatar, Box } from "@mui/material";

export default function HeroSection() {
  return (
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
        justifyContent: "center"
      }}
    >
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
          justifyContent: "center"
        }}
      >
        adadadadadadadaadadadadadadadaadadasdadadasdadadadadad
      </Box>
      <div></div>
    </Box>
  );
}
