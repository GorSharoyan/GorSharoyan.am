//library imports
import React from "react";
import GenericForm from "../GenericForm/GenericForm";

export default function LoginForm() {
  const loginFormEntries = {
    login: "",
    password: ""
  };

  return <GenericForm formEntrires={loginFormEntries} />;
}
