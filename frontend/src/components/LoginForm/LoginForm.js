//library imports
import React from "react";
import GenericForm from "../GenericForm/GenericForm";
import { Button } from "@mui/material";

export default function LoginForm() {
  const loginFormEntries = {
    login: " ",
    password: " "
  };

  const testFunction = (values) => {
    console.log("Login form works");
    console.log(values);
  };

  return (
    <GenericForm
      formEntries={loginFormEntries}
      onSubmitServiceFunction={testFunction}
      button={
        <Button variant="contained" color="primary">
          Sign in
        </Button>
      }
    />
  );
}
