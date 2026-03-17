//library imports
import React from "react";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom"; // ✅ import here

// components import
import SideBar from "../../components/SideBar/SideBar";

//services imports
import { getData } from "../../services/fetch.service";

//config imports
import { API_BASE_URL, BOOKS_API, SHCEMAS_API } from "../../config/api";

export default function AdminDashboard() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    async function parseFetchedData(api) {
      const parsedData = await getData(api);
      console.log("adminDashboards parsed data", parsedData);
      setCollections(parsedData);
    }
    parseFetchedData(SHCEMAS_API);
  }, []);

  // console.log("AdminDashboards", collections);
  return (
    <div>
      <h1>This is a place for Admin Dashboard</h1>
      <Grid container direction="raw">
        <Grid>
          <SideBar />
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
