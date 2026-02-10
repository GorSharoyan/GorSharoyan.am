import React from "react";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";

// components import
import SideBar from "../../components/SideBar/SideBar";

export default function AdminDashboard() {
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
          </h4>
        </Grid>
      </Grid>
    </div>
  );
}
