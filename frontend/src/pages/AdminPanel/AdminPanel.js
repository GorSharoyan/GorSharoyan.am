//Library Imports
import React, { useEffect, useState } from "react";
// components imports
import LoginForm from "../../components/LoginForm/LoginForm";
// services imports
import { postData } from "../../services/fetch.service";
//config imports
import { API_BASE_URL } from "../../config/api";

export default function AdminPanel() {
  const loginFunction = (values) => {
    postData(API_BASE_URL, values);
  };

  return (
    <main>
      <h1>This is My Admin Panel Space</h1>
      <LoginForm loginSubmitFunciton={loginFunction} />
    </main>
  );
}
