//library imports
import React from "react";
import GenericForm from "../GenericForm/GenericForm";
import { Button } from "@mui/material";

export default function LoginForm({ loginSubmitFunciton }) {
  const loginFormEntries = {
    login: " ",
    password: " "
  };
  return (
    <GenericForm
      formEntries={loginFormEntries}
      submitFunction={loginSubmitFunciton}
      button={
        <Button variant="contained" color="primary" type="submit">
          Sign In
        </Button>
      }
    />
  );
}
