//library imports
import React from "react";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

// components import
import ArchivesNavBar from "../../components/ArchivesNavBar/ArchivesNavBar.js";

//services imports
import { getData } from "../../services/fetch.service";

//config imports
import { API_BASE_URL, BOOKS_API, SHCEMAS_API } from "../../config/api";

//utils imports
import {
  filterArchivesCollections,
  filterCollectionNames
} from "../../utils/DBCollectionsUtils";

export default function AdminDashboard() {
  const [collections, setCollections] = useState([]);
  const [collectionNames, setCollectionNames] = useState([]);

  useEffect(() => {
    async function parseFetchedData(api) {
      //geting the data from the backend
      const parsedData = await getData(api);

      //debug just in case
      console.log("adminDashboards parsed data", parsedData);

      //filtering the data to get only the collections that we need
      const filteredCollections = filterArchivesCollections(parsedData);
      const collectionNames = filterCollectionNames(filteredCollections);

      //Summoning the hooks
      setCollections(filteredCollections);
      setCollectionNames(collectionNames);
    }
    parseFetchedData(SHCEMAS_API);
  }, [SHCEMAS_API]);

  // console.log("AdminDashboards", collections);
  return (
    <div>
      <h1>This is a place for Admin Dashboard</h1>
      <Grid container sx={{ flexDirection: "row" }}>
        <Grid>
          <ArchivesNavBar collectionNames={collectionNames} condition={"Add"} />
        </Grid>
        <Grid>
          <h4>
            This is a place for CRUD Form,thus this will be upladed to the DB in
            the backend
            <Outlet context={{ collections }} />
          </h4>
        </Grid>
      </Grid>
    </div>
  );
}
