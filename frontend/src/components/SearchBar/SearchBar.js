//library imports
import React from "react";
import { useState, useEffect } from "react";

//UI Imports
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchBar({
  arraytoFilterName,
  arraytoFilter,
  filteredArray,
  searchByCriterias
}) {
  const [searchedItem, setSearchedItem] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [searchTriggered, setsearhTriggered] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState("");

  //debugging log
  console.log("search bar rescived this directory name", arraytoFilterName);
  console.log("search bar rescived this array to be filtered", arraytoFilter);
  console.log("searchCriteria is selected as ", searchCriteria);

  //Search function
  const handleSearch = (value, searchCriteria) => {
    const rescivedValue = [];
    const searchedValue = value.trim().toLowerCase();
    console.log("handle Search rescieved this data", searchCriteria);

    // this case is writen for the scenario when input is empty and we need to return the initial datas array.
    if (value.trim() === "") {
      filteredArray(arraytoFilter);
      return;
    }
    // this case is written for the scenario when we have data inside and need to compare it with the data rescived to filter.
    else {
      for (let i = 0; i < arraytoFilter.length; i++) {
        const itemName = arraytoFilter[i][searchCriteria].toLowerCase();
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

  useEffect(() => {
    if (searchedItem.trim() === "") {
      setSearchResult(false);
    }
  }, [searchedItem]);

  return (
    <div>
      <div>
        <Autocomplete
          options={searchByCriterias}
          value={searchCriteria}
          onChange={(event, newValue) => setSearchCriteria(newValue.name)}
          renderInput={(params) => (
            <TextField {...params} label="search parametrs" />
          )}
        />
      </div>
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
            handleSearch(e.target.value, searchCriteria);
          }}
        />
      </div>
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
