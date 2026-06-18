//library imports
import React from "react";
import { useState } from "react";

//UI Imports
import { TextField } from "@mui/material";

export default function SearchBar({
  arraytoFilterName,
  arraytoFilter,
  filteredArray
}) {
  const [searchedItem, setSearchedItem] = useState("");
  const foundedItem = [];

  //debugging log
  console.log(searchedItem);
  console.log(arraytoFilterName);
  console.log(foundedItem);

  //Searching loop
  for (let i = 0; i < arraytoFilter.length; i++) {
    if (arraytoFilter[i].name.toLowerCase().includes(searchedItem)) {
      foundedItem.push(arraytoFilter[i]);
    } else {
      foundedItem.push([]);
    }
  }

  return (
    <TextField
      id="outlined-basic"
      label={`search for ${arraytoFilterName}`}
      variant="outlined"
      value={searchedItem}
      onChange={(e) => setSearchedItem(e.target.value)}
    />
  );
}
