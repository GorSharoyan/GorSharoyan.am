//Library imports
import React from "react";
import { Button, List, ListItem, ListItemText } from "@mui/material";

export default function SideBar(DBcollections) {
  const collections = DBcollections;
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary="movies" />
        </ListItem>
        <ListItem>
          <ListItemText primary="books" />
        </ListItem>
        <ListItem>
          <ListItemText primary="music" />
        </ListItem>
      </List>
    </div>
  );
}
