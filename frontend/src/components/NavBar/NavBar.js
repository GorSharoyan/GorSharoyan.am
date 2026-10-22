import React from "react";

//UI
import "./NavBar.css";

// Libraries imports
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/tech-talk">Tech Talk</Link>
        </li>
        <li>
          <Link to="/hobbies">My Hobbies</Link>
        </li>
        <li>
          <Link to="/archives">My Archives</Link>
        </li>
      </ul>
    </div>
  );
}
