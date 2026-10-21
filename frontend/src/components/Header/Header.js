import React from "react";

//component imports
import NavBar from "../NavBar/NavBar";

//UI
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>This is the place for the header</h1>
      <NavBar />
    </header>
  );
}
