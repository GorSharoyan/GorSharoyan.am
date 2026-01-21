//Library Imports
import React, { useEffect, useState } from "react";

// components imports
import LoginForm from "../../components/LoginForm/LoginForm";
// services imports
import { postData } from "../../services/fetch.service";
//config imports

export default function AdminPanel() {
  // const [loginFunction, setLoginFunction] = useState[false];

  // useEffect(() => {
  //   setLoginFunction(postData("body"));
  // }, []);

  return (
    <main>
      <h1>This is My Admin Panel Space</h1>
      <LoginForm />
    </main>
  );
}
