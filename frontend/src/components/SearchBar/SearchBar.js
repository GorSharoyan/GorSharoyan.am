//library imports
import React from "react";
import { useState, useEffect } from "react";

//UI Imports
import { TextField } from "@mui/material";

export default function SearchBar({
  arraytoFilterName,
  arraytoFilter,
  filteredArray
}) {
  const [searchedItem, setSearchedItem] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [searchTriggered, setsearhTriggered] = useState(false);

  //debugging log
  console.log("search bar rescived this directory name", arraytoFilterName);
  console.log("search bar rescived this array to be filtered", arraytoFilter);

  //Search function
  const handleSearch = (value) => {
    const rescivedValue = [];
    const searchedValue = value.trim().toLowerCase();

    // this case is writen for the scenario when input is empty and we need to return the initial datas array.
    if (value.trim() === "") {
      filteredArray(arraytoFilter);
      return;
    }
    // this case is written for the scenario when we have data inside and need to compare it with the data rescived to filter.
    else {
      for (let i = 0; i < arraytoFilter.length; i++) {
        const itemName = arraytoFilter[i].name.toLowerCase();
        const searchedValue = value.trim().toLowerCase();

        if (itemName.includes(searchedValue)) {
          rescivedValue.push(arraytoFilter[i]);
        }
      }

      console.log("search bar found this item ", rescivedValue);

      if (rescivedValue.length == 0) {
        filteredArray(arraytoFilter);
        setSearchResult(false);
        return;
      } else {
        filteredArray(rescivedValue);
        setSearchResult(true);
      }
    }
  };

  // This useEffect was added in order to have a constant working mechanism/logic to have clear result <div/>
  //after input is actually empty

  useEffect(() => {
    if (searchedItem.trim() === "") {
      setSearchResult(false);
    }
  }, [searchedItem]);

  return (
    <div>
      <TextField
        id="outlined-basic"
        label={`search for ${arraytoFilterName}`}
        variant="outlined"
        value={searchedItem}
        onChange={(e) => {
          console.log(e.target.value);
          setSearchedItem(e.target.value);
          setsearhTriggered(true);
          handleSearch(e.target.value);
        }}
      />
      <div>
        {searchTriggered ? (
          <div>
            {searchResult == false ? (
              <h2>No {arraytoFilterName.slice(0, -1)} found</h2>
            ) : (
              <h2> {arraytoFilterName.slice(0, -1)} found</h2>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
