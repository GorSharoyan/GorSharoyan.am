//library imports
import React from "react";
import GenericForm from "../GenericForm/GenericForm";
import { Button } from "@mui/material";

export default function LoginForm({ loginSubmitFunciton }) {
  //this syntax remains from the previous editon
  //based on this version GenericForm create initialValues based on the fromEntries it rescives

  // const loginFormInitialValues = {
  //   login: " ",
  //   password: " "
  // };

  const loginFormEntries = [{ name: "login" }, { name: "password" }];

  return (
    <GenericForm
      // inputInitalValues={loginFormInitialValues}
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
