//library imports
import React from "react";
import GenericForm from "../GenericForm/GenericForm";
import { Button } from "@mui/material";

export default function LoginForm(loginSubmitFunciton) {
  const loginFormEntries = {
    login: " ",
    password: " "
  };

  // //Test function for debugging
  // const testFunction = (values) => {
  //   console.log("Login form works");
  //   console.log(values);
  // };

  return (
    <GenericForm
      formEntries={loginFormEntries}
      onSubmitServiceFunction={loginSubmitFunciton}
      button={
        <Button variant="contained" color="primary">
          Sign in
        </Button>
      }
    />
  );
}
