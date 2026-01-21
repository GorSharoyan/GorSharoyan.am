//library imports
import React from "react";
import GenericForm from "../GenericForm/GenericForm";

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
    />
  );
}
