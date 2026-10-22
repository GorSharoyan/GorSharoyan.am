import React from "react";

//component imports
import NavBar from "../NavBar/NavBar";

//UI
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h4>Hi There,Welcome to my world</h4>
      <NavBar />
    </header>
  );
}
